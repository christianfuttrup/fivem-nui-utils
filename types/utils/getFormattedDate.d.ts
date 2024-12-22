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
export declare function getFormattedDate(date: Date, options?: Partial<FormatDateOptions>): string;
//# sourceMappingURL=getFormattedDate.d.ts.map