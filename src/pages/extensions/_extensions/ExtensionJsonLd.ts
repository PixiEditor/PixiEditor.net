import { pixiEditorId, pixiLabsId } from '@components/JsonLdShared';

export default function getExtensionJsonLd(extension: any, url: URL) {
    const extensionUrl = `https://pixieditor.net/extensions/${extension.Id}`;

    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": extensionUrl,
        "url": extensionUrl,
        "name": extension.Name,
        "description": extension.Description,
        ...(extension.ImageUrl ? { "image": extension.ImageUrl } : {}),
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "author": {
            "@type": "Person",
            "name": extension.Author
        },
        "publisher": {
            "@id": pixiLabsId
        },
        "isPartOf": {
            "@id": pixiEditorId
        },
        ...(extension.ReleaseDate ? {
            "datePublished": new Date(extension.ReleaseDate).toISOString()
        } : {}),
        ...(extension.Price > 0 ? {
            "offers": {
                "@type": "Offer",
                "price": (extension.Price / 100).toFixed(2),
                "priceCurrency": extension.Currency,
                "url": extensionUrl
            }
        } : {
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": extension.Currency || "USD",
                "url": extensionUrl
            }
        })
    };
}