import { z } from "astro:content";
import { tipSchema } from "../content/config";

// This TypeScript type is now automatically generated from the Zod schema.
// No need to maintain it manually!
export type Tip = z.infer<typeof tipSchema>;
