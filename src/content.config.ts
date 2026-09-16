import { defineCollection, reference } from 'astro:content';
import { z } from "zod"
import { glob } from 'astro/loaders';
import type { Loader } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        authors: reference('authors').array().optional(),
        description: z.string().optional(),
        date: z.coerce.date(),
        tags: reference('tags').array().optional(),
        cover: image().optional(),
        ogImage: image().optional(),
        video: z.string().optional(),
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

const extensionSchema = z.object({
        Id: z.string(),
        Name: z.string(),
        Description: z.string(),
        Author: z.string(),
        ImageUrl: z.string().url().optional(),
        Body: z.string(),
        ReleaseDate: z.coerce.date(),
        ShowcaseUrls: z.array(z.string().url()),
        Versions: z.array(z.object({
            ExtensionVersion: z.string(),
            PixiEditorApiVersion: z.number()
        })).optional(),
        Price: z.number().optional(),
        IsBundle: z.boolean().optional(),
        Currency: z.string(),
        PercentageDiscount: z.number().optional(),
        IncludedExtensions: z.array(z.string()).optional()});


const extensionLoader = {
    name: 'extensions',
    async load({ store, parseData, renderMarkdown }) {
        const response = await fetch('https://cdn.pixilabs.eu/items.json');
        var resp = await response.text();
        console.log(resp)
        const items = JSON.parse(resp);

        store.clear();

        for (const item of items) {
            const body = item.Body.startsWith('http://') || item.Body.startsWith('https://')
                ? await fetch(item.Body).then(response => response.text())
                : item.Body;

            const data = await parseData({
                id: item.Id,
                data: {
                    ...item,
                    Body: body
                }
            });

            store.set({
                id: item.Id,
                data,
                rendered: await renderMarkdown(body)
            });
        }
    },
    schema: extensionSchema
};

const extensions = defineCollection({
    loader: extensionLoader,
    schema: extensionSchema
});

export const collections = { blog, authors, docs, extensions };