// Example: formatDate.ts

// If you need month names, define them here (or generate them via Intl if you prefer):
const MONTH_NAMES = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
] as const;

export interface FormatDateOptions {
	/** If provided, this string is used instead of the automatically formatted date. */
	preFormattedDate?: string;
	/** If true, the year is omitted from the final string. */
	hideYear?: boolean;
}

/**
 * Formats a given Date object into a human-readable string.
 *
 * @param date - The Date object to format.
 * @param options - Optional formatting parameters.
 * @returns The formatted date string.
 */
export function getFormattedDate(
	date: Date,
	options: Partial<FormatDateOptions> = {}
): string {
	const { preFormattedDate, hideYear } = options;

	const day = date.getDate();
	const month = MONTH_NAMES[date.getMonth()];
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

	if (preFormattedDate) {
		return `${preFormattedDate} at ${hours}:${formattedMinutes}`;
	}

	if (hideYear) {
		return `${day}. ${month} at ${hours}:${formattedMinutes}`;
	}

	return `${day}. ${month} ${year}. at ${hours}:${formattedMinutes}`;
}
