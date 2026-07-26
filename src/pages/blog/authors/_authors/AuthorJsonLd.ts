import { getAuthorId } from '@components/JsonLdShared';
import type { CollectionEntry } from 'astro:content';

type Author = CollectionEntry<'authors'>;

export default function getAuthorJsonLd(author: Author) {
    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "@id": getAuthorId(author),
            "name": author.data.name,
            "jobTitle": author.data.title,
            "image": author.data.picture.src,
            "url": `https://pixieditor.net/blog/authors/${author.id}`
        }
    };
}
