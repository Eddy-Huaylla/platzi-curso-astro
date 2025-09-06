import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const getSortedTips = async (): Promise<CollectionEntry<"tips">[]> => {
	const allTips = await getCollection("tips");

	// Sort tips by pubDate in descending order (newest first)
	allTips.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return allTips;
};
