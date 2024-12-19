import type { CollectionEntry } from "astro:content";

export function getBlogPath(post: CollectionEntry<'blog'>): string {
    const date = post.data.date;

    return `/blog/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}/${post.id}`;
}

export function getDocsPath(doc: CollectionEntry<'docs'>) {
    return `/docs/${doc.id}`;
}