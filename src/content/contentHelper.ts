import type { CollectionEntry } from "astro:content";

export function getBlogPath(post: CollectionEntry<'blog'>): string {
    const date = post.data.date;

    return `/blog/${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${post.id}`;
}

export function getDocsPath(doc: CollectionEntry<'docs'>) {
    return `/docs/${doc.id}`;
}