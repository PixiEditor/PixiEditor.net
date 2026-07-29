import { getBlogPath } from "@content/contentHelper";
import type { CollectionEntry } from "astro:content";

type BlogPost = CollectionEntry<'blog'>
type Author = CollectionEntry<'authors'>

const pixiEditorId = "https://pixieditor.net/#pixieditor";
const pixiLabsId = "https://pixieditor.net/#pixilabs";

const blogId = "https://pixieditor.net/blog#blog";

function getBlogPostId(post: BlogPost) {
    return `https://pixieditor.net${getBlogPath(post)}#article`;
}

function getAuthorId(author: Author) {
    return `https://pixieditor.net/blog/authors/${author.id}#person`;
}

export { pixiEditorId, pixiLabsId, blogId, getBlogPostId, getAuthorId };
