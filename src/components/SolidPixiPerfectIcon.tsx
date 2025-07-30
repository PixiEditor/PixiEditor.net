import type { JSXElement } from "solid-js";
import type { PixiPerfectIconName } from "./PixiPerfecticonMeta";
import { iconToUnicode } from "./PixiPerfecticonMeta";

interface Props {
    data: PixiPerfectIconName,
    class?: string,
    ariaRelevant?: boolean,
}

export function SolidPixiPerfectIcon(props: Props): JSXElement {
    const { data, class: className, ariaRelevant, ...rest } = props;

    return <span class={`pixiperfect-icon ${className}`} aria-label={data} aria-hidden={!ariaRelevant} role="img" {...rest}>{iconToUnicode[data]}</span>
}
