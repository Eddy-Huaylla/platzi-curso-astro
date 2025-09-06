import { defineCollection, z } from "astro:content";

// 1. Define the schema for a tip and export it.
// This allows us to reuse it to infer the TypeScript type.
export const tipSchema = z.object({
	title: z.string(),
	pubDate: z.date(),
	description: z.string(),
	image: z.string().optional(),
	tags: z.array(z.string()),
});

// 2. Define the collection using the exported schema
const tipsCollection = defineCollection({
	type: "content",
	schema: tipSchema,
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	tips: tipsCollection,
};
