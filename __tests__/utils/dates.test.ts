import { describe, it, expect } from "vitest";
import { formatDate } from "../../src/utils/dates";

describe("formatDate", () => {
	it("debería formatear un objeto Date a un string en español", () => {
		// Arrange: The date to test
		const date = new Date("2025-09-15T12:00:00Z");

		// Act: Call the function
		const formatted = formatDate(date);

		// Assert: Check if the output is the expected string
		expect(formatted).toBe("15 de septiembre de 2025");
	});

	it("debería manejar otra fecha correctamente", () => {
		const date = new Date("2024-01-05T12:00:00Z");
		const formatted = formatDate(date);
		expect(formatted).toBe("5 de enero de 2024");
	});
});
