import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        authors: reference('authors').array().optional(),
        description: z.string().optional(),
        date: z.coerce.date(),
        tags: reference('tags').array().optional(),
        cover: z.string().optional(),
    })
});

const authors = defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/authors" }),
    schema: ({ image }) => z.object({
        name: z.string(),
        picture: image(),
        title: z.string(),
    })
})

const docs = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
    schema: z.object({
        title: z.string()
    })
})

export const collections = { blog, authors, docs };