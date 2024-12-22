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
export declare function isLatestReleaseForResource(showLogs?: boolean): Promise<boolean | undefined>;
//# sourceMappingURL=checkResourceVersion.d.ts.map