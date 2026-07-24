import { pixiEditorId, pixiLabsId, blogId } from "@components/JsonLdShared";
import fetchPixiEditorReviewStats from "./reviews/SteamReviewExtractor";
import { getDownloadAssets } from "@assets/links";
import { socials, github, flathub, forum, discordInvites, openCollective, steam } from "@assets/links";

let steamReviewData = null;
try {
    steamReviewData = import.meta.env.DEV
        ? null
        : await fetchPixiEditorReviewStats();
} catch (error) {
    console.error("Failed to fetch steam reviews for JSON-LD:", error);
}

const hasSteamReviews = steamReviewData && steamReviewData.totalReviews > 0 && steamReviewData.positivePercentage !== undefined;

let downloadAssets = null;
try {
    downloadAssets = await getDownloadAssets();
}
catch (error) {
    console.error("Failed to fetch download assets for JSON-LD:", error);
}

const hasSoftwareVersion = downloadAssets && downloadAssets.version !== "v0.0.0";

export default {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "@id": pixiEditorId,
            "name": "PixiEditor",
            "operatingSystem": "Windows, macOS, Linux",
            "applicationCategory": "DesignApplication",
            "description": "PixiEditor is a free and open-source universal 2D graphics editor, powered by an innovative Node Graph workflow. Create vectors, edit photos, design graphics, make pixel art and animate — all in one app.",
            "url": "https://pixieditor.net",
            "image": "https://pixieditor.net/img/og.png",
            "installUrl": "https://pixieditor.net/download",
            "featureList": [
                "Procedural Art",
                "Pixel Art Editing",
                "Image Editing",
                "Drawing",
                "Node Graph",
                "Brush Engine",
                "Vector Art",
                "Animations"
            ],
            "sameAs": [
                "https://www.wikidata.org/wiki/Q140676827",
                github.PixiEditor.index,
                discordInvites.chatChannel,
                steam.store,
                flathub.store,
                socials.subreddit,
                socials.youtubePage,
                socials.twitterPage,
                openCollective.page
            ],
            "discussionUrl": forum.index,
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "softwareHelp": {
                "@type": "CreativeWork",
                "name": "PixiEditor Docs",
                "url": "https://pixieditor.net/docs/"
            },
            "maintainer": {
                "@id": pixiLabsId
            },
            "subjectOf": {
                "@id": blogId
            },
            ...(hasSoftwareVersion ? {
                "softwareVersion": downloadAssets!.version
            } : {}),
            ...(hasSteamReviews ? {
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": Math.round(steamReviewData!.positivePercentage),
                    "ratingCount": steamReviewData!.totalReviews,
                    "bestRating": 100,
                    "worstRating": 0
                }
            } : {})
        },
        {
            "@type": "Organization",
            "@id": pixiLabsId,
            "name": "Pixi Labs",
            "legalName": "Pixi Labs Sp. z o.o",
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@pixilabs.eu"
            }
        }
    ]
};