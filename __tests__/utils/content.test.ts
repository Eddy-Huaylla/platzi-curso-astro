import { describe, it, expect, vi } from "vitest";
import { getCollection } from "astro:content";
import { getSortedTips } from "../../src/utils/content";

// Mock the entire 'astro:content' module
vi.mock("astro:content", () => ({
	getCollection: vi.fn(),
}));

describe("getSortedTips", () => {
	it("debería devolver los tips ordenados por fecha de publicación descendente", async () => {
		// Arrange: Create mock data that the getCollection function will return
		const mockTips = [
			{ data: { pubDate: new Date("2025-01-01") } }, // Oldest
			{ data: { pubDate: new Date("2025-12-31") } }, // Newest
			{ data: { pubDate: new Date("2025-06-15") } }, // Middle
		];

		// Configure the mock to return our data when getCollection('tips') is called
		(getCollection as ReturnType<typeof vi.fn>).mockResolvedValue(mockTips);

		// Act: Call the function we are testing
		const sortedTips = await getSortedTips();

		// Assert: Check if the tips are sorted correctly (newest first)
		expect(sortedTips.map((tip) => tip.data.pubDate)).toEqual([
			new Date("2025-12-31"),
			new Date("2025-06-15"),
			new Date("2025-01-01"),
		]);
	});
});
