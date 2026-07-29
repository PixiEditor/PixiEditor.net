import { pixiEditorId, pixiLabsId, blogId } from "@components/JsonLdShared"; 

export default {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": blogId,
    "mainEntityOfPage": "https://pixieditor.net/blog",
    "name": "PixiEditor Blog",
    "description": "Official blog about the latest news around PixiEditor",
    "about": {
        "@id": pixiEditorId
    },
    "publisher": {
        "@id": pixiLabsId
    }
}