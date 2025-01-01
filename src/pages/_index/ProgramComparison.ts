import type { ImageMetadata } from "astro";

import PixiEditorLogoTextHorizontal from '@assets/logos/PixiEditorLogoTextHorizontal.svg';
import Photoshop from '@assets/logos/Photoshop.svg';

enum Quality {
    Positive = "positive",
    Neutral = "neutral",
    Negative = "negative",
    NA = "n/a"
}

// Editor Type
interface Editor {
    id: string;
    name: string;
    icon: ImageMetadata;
}

// Comparison for a specific criterion and editor
interface Comparison {
    editorId: string;
    quality: Quality;
    label: string;
}

// Criterion Type
interface Criterion {
    id: string;
    name: string;
    comparisons: Comparison[];
}

// Main Data Structure
interface ComparisonData {
    Editors: Editor[];
    Criteria: Criterion[];
}

const data: ComparisonData = {
    Editors: [
        {
            id: "pixieditor",
            name: "PixiEditor",
            icon: PixiEditorLogoTextHorizontal,
        },
        {
            id: "photoshop",
            name: "Adobe Photoshop",
            icon: Photoshop,
        },
    ],
    Criteria: [
        {
            id: "price",
            name: "Price",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Free and open source",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Negative,
                    label: "$23 / month",
                },
            ],
        },
        {
            id: "animations",
            name: "Animations",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Frame by frame, nodes",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Positive,
                    label: "Frame by frame, tween",
                },
            ],
        },
        {
            id: "painting-brushes",
            name: "Painting brushes",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Soft, Pixel Perfect",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Positive,
                    label: "Brush Engine",
                },
            ],
        },
        {
            id: "photo-filters",
            name: "Photo filters",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Yes",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Positive,
                    label: "Yes",
                },
            ],
        },
        {
            id: "procedural-art-tools",
            name: "Procedural art tools",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Yes",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Negative,
                    label: "No",
                },
            ],
        },
        {
            id: "pixel-perfect-tools",
            name: "Pixel-perfect tools",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Dedicated toolset",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Neutral,
                    label: "Requires configuration",
                },
            ],
        },
        {
            id: "vector-tools",
            name: "Vector Tools",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Dedicated toolset",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Neutral,
                    label: "Limited",
                },
            ],
        },
        {
            id: "supported-formats",
            name: "Supported Formats",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "png, jpg, gif, mp4, bmp, pixi, svg",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "png, jpg, gif, psd, psb, tiff, pdf",
                },
            ],
        },
        {
            id: "color-palettes",
            name: "Color Palettes",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Advanced",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Neutral,
                    label: "Simple",
                },
            ],
        },
        {
            id: "game-correct",
            name: "Gamma-correct blending",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Yes",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Neutral,
                    label: "Not by default",
                },
            ],
        },
        {
            id: "layers",
            name: "Layers",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Yes",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Positive,
                    label: "Yes",
                },
            ],
        },
        {
            id: "supported-platforms",
            name: "Supported platforms",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Windows, macOS, Linux",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Neutral,
                    label: "Windows, macOS",
                },
            ],
        },
        {
            id: "plugins",
            name: "Plugins",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Neutral,
                    label: "Coming in 2025",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Positive,
                    label: "Yes",
                },
            ],
        },
        {
            id: "custom-shaders",
            name: "Custom shaders",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.Positive,
                    label: "Yes",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.Negative,
                    label: "No",
                },
            ],
        }
    ],
};

export type { ComparisonData, Editor, Criterion, Comparison }
export { data, Quality }