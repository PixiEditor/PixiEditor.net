import { createSignal } from "solid-js";
import { Dropdown as PlatformDropdown } from "./PlatformDropdown";
import { SolidLucide } from "@components/SolidLucide";
import type { GetImageResult } from "astro";

const optionsMap = {
  "Windows x64": {
    platform: "win",
    architecture: "setup64",
    option: "zip",
  },
  "Linux x64 | tar.gz": {
    platform: "linux",
    architecture: "amd64",
    option: "tar.gz",
  },
  "Linux x64 | deb": {
    platform: "linux",
    architecture: "amd64",
    option: "deb",
  },
  "macOS | universal": {
    platform: "macos",
    architecture: "universal",
    option: "dmg",
  },
};

export default function PlatformSelection(props: { "data-links": any, microsoftLogo: GetImageResult, appleLogo: GetImageResult, linuxLogo: GetImageResult, fullInfo: boolean }) {
  const versionInfo = props["data-links"] as {
    version: string;
    assets: {
        platform: string;
        architecture: string;
        option: string;
        downloadUrl: string;
    }[];
  }

  function getDownloadUrlForOption(option: string): string {
    const mappedOption = optionsMap[option as keyof typeof optionsMap];
    const asset = versionInfo.assets.find(x => x.platform.toLowerCase() === mappedOption.platform && x.architecture.toLowerCase() === mappedOption.architecture && x.option === mappedOption.option);
    if (!asset) {
      return "https://github.com/PixiEditor/PixiEditor/releases/latest";
    }

    return asset.downloadUrl;
  }

  const [selectedOption, setSelectedOption] = createSignal("Windows x64");
  const options = ["Windows x64", "-", "--", "Linux x64 | tar.gz", "-", "Linux x64 | deb" , "-", "--", "macOS | universal"];

  return (
    <div>
      <div class="mt-1 mb-3">
        <PlatformDropdown
          options={options}
          selected={selectedOption()}
          onSelect={setSelectedOption}
          microsoftLogo={props.microsoftLogo}
          appleLogo={props.appleLogo}
          linuxLogo={props.linuxLogo}
        />
      </div>
      <div class={props.fullInfo ? "flex items-center justify-center min-h-[150px]" : "flex items-center justify-center h-[80px]"}>
        {(!selectedOption().startsWith("macOS") || !props.fullInfo) && 
        (
          <div>
            <a href={getDownloadUrlForOption(selectedOption())} class="px-button-soft block w-full max-w-xs mx-auto text-xl py-3">
              <SolidLucide data="download" class="align-middle me-1" />
              <span class="align-middle">Download</span>
            </a>
            <div class={props.fullInfo ? "flex justify-around mt-5 max-w-72 mx-auto" : "flex justify-around mt-2 max-w-72 mx-auto"}>
              <span class="mr-4">Version {versionInfo.version}</span>
              <a class="underline" href="https://forum.pixieditor.net/c/changelogs" target="_blank">Release Notes <SolidLucide data="external-link" class="align-sub" /> </a>
            </div>
            {props.fullInfo ? <a class="text-sm text-neutral-400 underline" href="https://github.com/PixiEditor/PixiEditor/releases" target="_blank">Download archive versions from GitHub <SolidLucide data="external-link" /> </a> : null}
          </div>
        )}
        {selectedOption().startsWith("macOS") && props.fullInfo &&
        (
            <div class="w-full max-w-d text-center flex flex-col min-h-[150px] gap-4">
              <p>Building for MacOS is expensive for us, so for now the MacOS version is only available if you purchase Founder's Bundle. This might change in the future.</p>
              <p class="mt-auto">Already own Founder's Bundle? <a href={getDownloadUrlForOption(selectedOption())} class="underline">Download</a></p>
              <p class="text-sm text-neutral-400 mt-auto">You can still <a href="/docs/contribution/compileguide" class="underline">build from source</a></p>
            </div>
        )
        }
      </div>

    </div>
  );
}
