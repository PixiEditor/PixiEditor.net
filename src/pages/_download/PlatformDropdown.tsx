import { createSignal } from "solid-js";
import { PlatformName } from "./PlatformName";
import { SolidLucide } from "@components/SolidLucide";
import type { GetImageResult } from "astro";

export function Dropdown(props: { selected: string, options: string[], onSelect: (option: string) => void, microsoftLogo: GetImageResult, appleLogo: GetImageResult, linuxLogo: GetImageResult }) {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="dropdown relative inline-block text-left">
      <button onClick={() => setIsOpen(!isOpen())} class="bg-neutral-700 hover:bg-neutral-600 transition-colors px-4 py-2 rounded cursor-pointer w-3xs flex justify-between">
        {<PlatformName name={props.selected}
            microsoftLogo={props.microsoftLogo}
            appleLogo={props.appleLogo}
            linuxLogo={props.linuxLogo} />} <SolidLucide data="chevron-down" class="inline align-middle" />
      </button>
      {isOpen() && (
        <ul class="absolute top-full left-1/2 z-10 list-none m-0 w-56 rounded bg-neutral-700 -translate-x-1/2 overflow-hidden mt-1">
          {props.options.map((option) => (
              (option !== "-" && option !== "--") &&
              <li
                onClick={() => {
                  props.onSelect(option);
                  setIsOpen(false);
                }}
              class="px-2 py-3 cursor-pointer hover:bg-neutral-900">
                {<PlatformName name={option}
                    microsoftLogo={props.microsoftLogo}
                    appleLogo={props.appleLogo}
                    linuxLogo={props.linuxLogo} />}
              </li> || option === "-" && <div class="mx-2 h-px bg-neutral-600" /> ||
              option === "--" && <div class="mx-2 h-px bg-neutral-400" />
          ))}
        </ul>
      )}
    </div>
  );
}
