import { getBlogPostId } from '@components/JsonLdShared';
import { getBlogPath } from '@content/contentHelper';
import type { CollectionEntry } from 'astro:content';
import { pixiEditorId, pixiLabsId, blogId } from '@components/JsonLdShared';
import { getAuthorId } from '@components/JsonLdShared';

type Blog = CollectionEntry<'blog'>;
type Author = CollectionEntry<'authors'>;

export default function getBlogPostJsonLd(post: Blog, author: Author | null, url: URL) {
    const authorData = author
        ? {
            "@id": getAuthorId(author)
          }
        : {
            "@id": pixiLabsId
          };

    const imageUrl = post.data.cover
        ? post.data.cover.src
        : "https://pixieditor.net/img/blog-cover.png";

    const keywords = post.data.tags?.map(tag => (tag as any).id).join(', ');

    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": getBlogPostId(post),
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://pixieditor.net${getBlogPath(post)}`
        },
        "headline": post.data.title,
        "description": post.data.description,
        "image": imageUrl,
        "datePublished": post.data.date.toISOString(),
        "dateModified": post.data.date.toISOString(),
        "author": authorData,
        "about": {
            "@id": pixiEditorId
        },
        "isPartOf": {
            "@id": blogId
        },
        "publisher": {
            "@id": pixiLabsId
        },
        ...(keywords ? { "keywords": keywords } : {}),
        ...(post.data.video ? { "video": post.data.video } : {})
    };
}