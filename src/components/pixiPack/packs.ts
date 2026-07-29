import SilverBadge from "./silver.png";
import GoldBadge from "./gold.png";
import DiamondBadge from "./diamond.png";

export const packs = [
    {
        title: "Silver",
        titleStyle:  "background: linear-gradient(226deg, #888 0%, #DCDCDC 97.93%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;",

        accent: "text-[#DFDFDF] bg-[#393939]",
        background: "bg-neutral-800",

        button: "bg-neutral-500",
        buttonHover: "hover:bg-neutral-400",

        price: 120,

        badgeImage: SilverBadge,
        productId: "PixiLabs.Supporter26Tier1",

        features: [
            "10 unique <strong>brushes</strong>",
            "<strong>Paper, brownpaper and wood</strong> workspaces",
            "Limited <strong>2026 Supporter Badge</strong>*",
        ],
    },

    {
        title: "Gold",
        titleStyle:  "background: linear-gradient(222deg, #F3C31A -4.87%, #FFEBA6 86.09%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;",

        accent: "text-[#FCD77E] bg-[#443d2d]",
        background: "bg-[#302c24]",

        button: "bg-[#b58a25]",
        buttonHover: "hover:bg-[#c6982d]",

        description: "Everything in Silver, plus:",

        price: 300,

        badgeImage: GoldBadge,
        productId: "PixiLabs.Supporter26Tier2",

        features: [
            "<strong>Reusable Animation</strong> Workspace",
            "Free access to <strong>Advanced Pixel Art</strong> Extension",
        ],
    },

    {
        title: "Diamond",
        titleStyle:  "background: linear-gradient(226deg, #7568C6 -10.48%, #DDD8FF 86.94%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;",

        accent: "text-[#C3B9FF] bg-[#333141]",
        background: "bg-[#23222c]",

        button: "bg-[#7861d6]",
        buttonHover: "hover:bg-[#8b75ea]",

        description: "Everything in Gold, plus:",

        badgeImage: DiamondBadge,
        productId: "PixiLabs.Supporter26Tier3",

        price: 570,

        features: [
            "Free access to <strong>all Extensions</strong> from PixiEditor's Extension Browser**",
        ],
    },
];