/**
 * Checks if the current resource is the latest release available on GitHub.
 *
 * @param {boolean} [showLogs=true] - Whether to show logs in the console.
 * @returns {Promise<boolean | undefined>} A promise that resolves to `true` if the resource is up to date,
 * `false` if a newer version is available, or `undefined` if an error occurs or required metadata is missing.
 *
 * @remarks This function requires the `github_repo`, `github_version`, and `github_owner` metadata to be set in the resource's fxmanifest.lua file.
 *
 * @throws {Error} If there is an issue with fetching the release information from GitHub.
 */
export async function isLatestReleaseForResource(
	showLogs: boolean = true
): Promise<boolean | undefined> {
	const resourceName = GetCurrentResourceName();

	// Get the resource metadata from the fxmanifest.lua file
	const resourceRepo = GetResourceMetadata(resourceName, "github_repo", 0);
	const resourceVersion = GetResourceMetadata(
		resourceName,
		"github_version",
		0
	);
	const resourceOwner = GetResourceMetadata(resourceName, "github_owner", 0);

	if (!resourceVersion) {
		console.warn(
			`[Check] Resource "${resourceName}" is missing a 'version'.`
		);
		return undefined;
	}

	// Check if the GitHub repository name is available
	if (!resourceRepo) {
		console.warn(
			`[Check] Resource "${resourceName}" is missing a 'github_repo' declaration in fxmanifest.lua.`
		);

		return undefined;
	}

	// Check if the GitHub owner is available
	if (!resourceOwner) {
		console.warn(
			`[Check] Resource "${resourceName}" is missing a 'github_owner' declaration in fxmanifest.lua.`
		);

		return undefined;
	}

	try {
		// Construct the URL to fetch the latest release from GitHub
		const url = `https://api.github.com/repos/${resourceOwner}/${resourceName}/releases/latest`;
		const res = await fetch(url).then((response) => response.json());

		// Check if the tag_name (version) is available in the response
		if (!res.tag_name) {
			console.warn("Could not determine remote version from GitHub.");
		} else {
			if (res.tag_name === resourceVersion && showLogs) {
				console.log("Resource is up to date.");

				return true;
			} else if (res.tag_name > resourceVersion) {
				console.warn(
					`\x1b[32mA newer version is available: ${res.tag_name} (current: ${resourceVersion}).\x1b[0m`
				);

				return false;
			}
		}
	} catch (error) {
		// Log any errors that occur during the fetch operation
		console.error("Error during fetch:", error);

		return undefined;
	}
}
