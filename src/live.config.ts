import { defineLiveCollection } from "astro:content";

// Example live collection — replace the loader with your data source
// Live collections fetch data at runtime (per request), not at build time
//
// To create a custom loader, implement:
//   loadCollection() — returns all entries
//   loadEntry(id) — returns a single entry
//
// const posts = defineLiveCollection({
//   loader: myCustomLoader({ endpoint: "https://api.example.com/posts" }),
//   schema: z.object({
//     title: z.string(),
//     body: z.string(),
//     publishedAt: z.date(),
//   }),
// });
//
// export const collections = { posts };

export const collections = {};
