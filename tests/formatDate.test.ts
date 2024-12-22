import { getFormattedDate } from "./../src/utils/getFormattedDate";

describe("getFormattedDate", () => {
	it("formats date with default options", () => {
		const date = new Date("2023-08-15T09:05:00");
		const result = getFormattedDate(date);
		expect(result).toBe("15. August 2023. at 9:05");
	});

	it("formats date using a preFormattedDate value", () => {
		const date = new Date("2023-08-15T09:05:00");
		const result = getFormattedDate(date, {
			preFormattedDate: "August 15",
		});
		expect(result).toBe("August 15 at 9:05");
	});

	it("formats date hiding the year", () => {
		const date = new Date("2023-08-15T09:05:00");
		const result = getFormattedDate(date, { hideYear: true });
		expect(result).toBe("15. August at 9:05");
	});

	it("handles single-digit minutes properly", () => {
		const date = new Date("2023-08-15T09:07:00");
		const result = getFormattedDate(date);
		expect(result).toBe("15. August 2023. at 9:07");
	});
});
