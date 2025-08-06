import { getCollection, type CollectionEntry } from "astro:content";

const authors = await getCollection('authors');

export function getBlogPath(post: CollectionEntry<'blog'>): string {
    const date = post.data.date;

    return `/blog/${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${post.id}`;
}

export function getAuthors(post: CollectionEntry<'blog'>): CollectionEntry<'authors'>[] | undefined {
    const data = post.data
        .authors?.map(postAuthor => authors
            .find(author => author.id == postAuthor.id));

    return data?.filter(x => x).map(x => x!);
}

export function getDocsPath(doc: CollectionEntry<'docs'>) {
    return `/docs/${doc.id}`;
}