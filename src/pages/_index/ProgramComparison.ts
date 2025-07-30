import type { ImageMetadata } from "astro";

import PixiEditorIcon from '@assets/logos/PixiEditorIcon.svg';
import Photoshop from '@assets/logos/Photoshop.svg';
import Illustator from '@assets/logos/AdobeIllustrator.svg';
import Aseprite from '@assets/logos/aseprite.png';

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
            icon: PixiEditorIcon,
        },
        {
            id: "photoshop",
            name: "Adobe Photoshop",
            icon: Photoshop,
        },
        {
            id: "illustrator",
            name: "Adobe Illustrator",
            icon: Illustator
        },
        {
            id: "aseprite",
            name: "Aseprite",
            icon: Aseprite
        },
    ],
    Criteria: [
        {
            id: "price",
            name: "Price",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Free and open source",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "$23 / month",
                },
                {
                    editorId: "illustrator",
                    quality: Quality.NA,
                    label: "$23 / month",
                },
                {
                    editorId: "aseprite",
                    quality: Quality.NA,
                    label: "$20 one-time purchase",
                }
            ],
        },
        {
            id: "offline",
            name: "Offline",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Full offline support",
                },
            ],
        },
        {
            id: "raster-animations",
            name: "Animations",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Frame by frame, procedural",
                },
                {
                    editorId: "aseprite",
                    quality: Quality.NA,
                    label: "Frame by frame"
                }
/*                 {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "Frame by frame, tween",
                }, */
            ],
        },
        {
            id: "workspace-customization",
            name: "Workspace customization",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Full customization with render graph",
                },
                {
                    editorId: "aseprite",
                    quality: Quality.NA,
                    label: "Classic 2D workspace",
                }
            ],
        },
        {
            id: "vector-animations",
            name: "Vector animations",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Possible with nodes",
                },
                {
                    editorId: "illustrator",
                    quality: Quality.NA,
                    label: "No",
                }
            ],
        },
        {
            id: "photo-filters",
            name: "Photo filters",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Yes",
                },
                /* {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "Yes",
                } */
            ],
        },
        {
            id: "procedural-art-tools",
            name: "Procedural tools",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Yes",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "No",
                },
                {
                    editorId: "illustrator",
                    quality: Quality.NA,
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
                    quality: Quality.NA,
                    label: "Dedicated toolset",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "Requires configuration",
                },
            ],
        },
        {
            id: "non-destructive-editing",
            name: "Non-destructive editing",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Layers, editable text, effects. Fully non-destructive",
                },
                {
                    editorId: "aseprite",
                    quality: Quality.NA,
                    label: "Only with layers",
                }
            ],
        },
        {
            id: "vector-tools",
            name: "Vector Tools",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Dedicated toolset, SVG Import/Export",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "Limited",
                },
            ],
        },
        {
            id: "color-palettes",
            name: "Color Palettes",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Palette Browser, One-click Lospec import",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "Basic",
                },
                {
                    editorId: "illustrator",
                    quality: Quality.NA,
                    label: "Basic",
                },
            ],
        },
        {
            id: "game-correct",
            name: "Gamma-correct blending",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Yes",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "Not by default",
                },
            ],
        },
        {
            id: "supported-platforms",
            name: "Supported platforms",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Windows, macOS, Linux",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "Windows, macOS",
                },
                {
                    editorId: "illustrator",
                    quality: Quality.NA,
                    label: "Windows, macOS",
                },
            ],
        },
        {
            id: "effects",
            name: "Effects",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Non-destructive customizable Node Graph",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "Built-in, Adjustment Layers",
                },
                {
                    editorId: "illustrator",
                    quality: Quality.NA,
                    label: "Built-in, destructive",
                },
                
            ],
        },
        {
            id: "custom-shaders",
            name: "Ability to create custom shaders",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Yes",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "No",
                },
                {
                    editorId: "illustrator",
                    quality: Quality.NA,
                    label: "No",
                },
                
            ],
        },
        {
            id: "programmable-workspaces",
            name: "Programmable workspaces",
            comparisons: [
                {
                    editorId: "pixieditor",
                    quality: Quality.NA,
                    label: "Yes",
                },
                {
                    editorId: "photoshop",
                    quality: Quality.NA,
                    label: "No",
                },
            ],
        },
        {
            id: "raster-support",
            name: "Raster support",
            comparisons: [
                {
                    "editorId": "pixieditor",
                    "quality": Quality.NA,
                    "label": "Dedicated toolset, advanced features",
                },
                {
                    "editorId": "illustrator",
                    "quality": Quality.NA,
                    "label": "Limited",
                },
            ],
        },
    ],
};

export type { ComparisonData, Editor, Criterion, Comparison }
export { data, Quality }