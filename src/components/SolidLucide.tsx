import type { JSXElement } from "solid-js";
import type { LucideIconName } from "./LucideMeta";

export function SolidLucide(props: { data: LucideIconName, class?: string, ariaRelevant?: boolean }): JSXElement {
    const iconName = `icon-${props.data}`;
    const { class: _, ...rest } = props;

    return <span class={`${iconName} ${props.class} lucide-icon`} {...rest} aria-label={iconName} aria-hidden={!props.ariaRelevant} role="img"></span>;
}
