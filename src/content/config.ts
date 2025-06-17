import { defineCollection, z } from "astro:content";

const imagesCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      description: z.string(),
    }),
});

const booksCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      portada: image(),
      book: z.string(),
      description: z.object({
        name: z.string(),
        tematic: z.string(),
        editorial: z.string(),
        author: z.string(),
        info: z.string(),
      }),
    }),
});

const videosCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    poster: z.string(),
    video: z.string(),
    description: z.object({
      name: z.string(),
    }),
  }),
});

export const collections = {
  images: imagesCollection,
  books: booksCollection,
  videos: videosCollection,
};
