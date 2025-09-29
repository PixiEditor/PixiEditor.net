export const forum = {
    index: "https://forum.pixieditor.net"
}

export const socials = {
    subreddit: "https://www.reddit.com/r/PixiEditor/",
    twitterPage: "https://twitter.com/PixiEditor",
    youtubePage: "https://www.youtube.com/@PixiEditor"
}

export const steam = {
    store: "https://store.steampowered.com/app/2218560/PixiEditor__Pixel_Art_Editor/",
    supporterPackStore: "https://store.steampowered.com/app/2435860/PixiEditor__Supporter_Pack/"
}

export const flathub = {
    store: "https://flathub.org/apps/details/net.pixieditor.PixiEditor"
}

export const microsoft = {
    store: "https://apps.microsoft.com/detail/9nddrhs8pbrn"
}

export const github = {
    PixiEditor: { index: "https://github.com/PixiEditor/PixiEditor" },
    ColorPicker: { index: "https://github.com/PixiEditor/ColorPicker" },
    Drawie: { index: "https://github.com/PixiEditor/Drawie" },
    Parser: { index: "https://github.com/PixiEditor/PixiParser" },
    Docks: { index: "https://github.com/PixiEditor/PixiDocks" }
};

export const nuget = {
    ColorPicker: "https://github.com/PixiEditor/ColorPicker",
    Parser: "https://www.nuget.org/packages/PixiEditor.Parser"
}

export const openCollective = {
    page: "https://opencollective.com/PixiEditor",
    silver: "https://opencollective.com/pixieditor/contribute/silver-tier-81980/checkout",
    gold: "https://opencollective.com/pixieditor/contribute/gold-tier-81981/checkout",
    diamond: "https://opencollective.com/pixieditor/contribute/diamond-tier-81982/checkout",
    platinum: "https://opencollective.com/pixieditor/contribute/platinum-tier-81983/checkout"
}

export const discordInvites = {
    chatChannel: "https://discord.gg/ss4KNYCGaS",
    aotwChannel: "https://discord.gg/VbuxdPVGcP",
    helpChannel: "https://discord.gg/5zybZVFNdA",
    projectChannel: "https://discord.gg/tzkQFDkqQS"
}

export const email = {
    info: "info@pixieditor.net"
}

interface GithubReleaseAsset {
    name: string;
    browser_download_url: string;
}

export async function getDownloadAssets(): Promise<{ version: string, assets: { platform: string; architecture: string; option: string; downloadUrl: string; }[] }> {

   if(!import.meta.env.PROD) {
        {
            return {
                version: "v0.0.0",
                assets: [
                    {
                        platform: "windows",
                        architecture: "x64",
                        option: "exe",
                        downloadUrl: "https://example.com/windows-x64.exe"
                    },
                    {
                        platform: "linux",
                        architecture: "x64",
                        option: "tar.gz",
                        downloadUrl: "https://example.com/linux-x64.tar.gz"
                    },
                    {
                        platform: "macOS",
                        architecture: "x64",
                        option: "dmg",
                        downloadUrl: "https://example.com/macos-x64.dmg"
                    }
                ]
        }
    }
} 

    const response: { tag_name: string, assets: GithubReleaseAsset[] } = await fetch("https://api.github.com/repos/PixiEditor/PixiEditor/releases/latest")
        .then(resp => resp.json())
        .catch(err => {
            console.error("Failed to fetch PixiEditor releases from GitHub:", err);
        });

    const relevantAssets = response.assets.map(asset => {
        const splitted = asset.name.split("-");

        if (splitted.length < 4) {
            return null;
        }

        const architecture = splitted[2];
        let platform = splitted[3];
        const dotsSplitted = asset.name.split(".");
        let extension = dotsSplitted[dotsSplitted.length - 1];

        if (extension == "gz") {
            extension = "tar.gz";
        }

        if (platform.split(".").length > 1) {
            platform = platform.split(".")[0];
        }

        return {
            platform: platform as string,
            architecture: architecture as string,
            option: extension as string,
            downloadUrl: asset.browser_download_url
        };
    }).filter(x => x);

    return {
        version: response.tag_name,
        assets: relevantAssets
    }
}