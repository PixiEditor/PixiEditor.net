import { createMemo } from "solid-js";

import type { GetImageResult } from "astro";

export function PlatformName(props: { name: string, microsoftLogo: GetImageResult, appleLogo: GetImageResult, linuxLogo: GetImageResult }) {
    const fullNameSplit = createMemo(() => props.name.split(" "));
    
    return (
        <span class="align-middle">
            {fullNameSplit()[0] === "Windows" && <img class="inline w-5 align-middle" src={props.microsoftLogo.src} {...props.microsoftLogo.attributes} />}
            {fullNameSplit()[0] === "macOS" && <img class="inline w-5 align-middle" src={props.appleLogo.src} {...props.appleLogo.attributes} />}
            <span class="font-bold ps-2">{fullNameSplit()[0]}</span> {fullNameSplit().join(" ").slice(fullNameSplit()[0].length + 1)}
        </span>
    );
}
