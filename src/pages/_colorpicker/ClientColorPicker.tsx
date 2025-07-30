import { createSignal, type JSXElement } from "solid-js";
import NugetPackageReference from "./NugetPackageReference";

function getClass(thisFramework: string, currentFramework: () => string, isFrameowrk: string, isNotFramework: string) {
    return currentFramework() === thisFramework ? isFrameowrk : isNotFramework;
}

export default function ClientColorPicker(props: { wpfVersion: string, avaloniaVersion: string }): JSXElement {
    const [framework, setFramework] = createSignal("WPF");

    const packageName = () => framework() === "WPF" ? "PixiEditor.ColorPicker" : "PixiEditor.ColorPicker.AvaloniaUI";
    const packageVersion = () => framework() === "WPF" ? props.wpfVersion : props.avaloniaVersion;

    return <div>
        <h2 class="text-xl mb-1"><span class="font-semibold">Select</span> your framework</h2>
        <div class="grid grid-cols-2 gap-2 w-fit bg-neutral-910 rounded-xl p-2 mb-8">
            <button class={`${getClass("WPF", framework, "bg-neutral-800", "bg-neutral-900")} rounded text-center p-2 px-4 cursor-pointer hover:bg-neutral-700 transition-colors`}
                    onClick={() => setFramework("WPF")}>
                WPF
                <div class="w-12 h-1 bg-[#1ea5d9] rounded mx-auto"></div>
            </button>
            <button class={`${getClass("Avalonia", framework, "bg-neutral-800", "bg-neutral-900")} rounded text-center p-2 px-4 cursor-pointer hover:bg-neutral-700 transition-colors`}
                    onClick={() => setFramework("Avalonia")}>
                AvaloniaUI
                <div class="w-full h-1 bg-[#6f42c1] rounded mx-auto"></div>
            </button>
        </div>

        <h2 class="text-xl mb-1"><span class="font-semibold">Install</span> the Package</h2>
        <NugetPackageReference package={packageName()} version={packageVersion()} />
    </div>
}
