import type { Comparison, Editor } from "../ProgramComparison"
import type { LucideIconName } from "@components/LucideMeta";
import type { JSXElement } from "solid-js";
import { SolidLucide } from "@components/SolidLucide";
import { Quality } from "../ProgramComparison";
import { rowClass } from "./ComparisonHelper";
import type { GetImageResult } from "astro";

const getQualityClass = (quality?: Quality): string => {
    switch (quality) {
        case Quality.Positive:
            return 'text-green-500';
        case Quality.Neutral:
            return 'text-orange-500';
        case Quality.Negative:
            return 'text-red-500';
        default:
            return '';
    }
};

const getQualityIcon = (quality?: Quality): LucideIconName => {
    switch (quality) {
        case Quality.Positive:
            return 'thumbs-up';
        case Quality.Neutral:
            return 'triangle-alert';
        case Quality.Negative:
            return 'thumbs-down';
        default:
            throw Error("Invalid quality icon");
    }
};

export function CompairsonColumn(props: { editor: Editor, editorIcons: { id: string, image: GetImageResult }[], comparisons: Comparison[] }): JSXElement {
    const { editor, editorIcons, comparisons } = props;

    const icon = editorIcons.find(x => x.id === editor.id)!.image;

    return <div class="program-comparison-column">
        {
            comparisons.map(comparison => 
                <div class={`${rowClass} program-comparison-item px-2`}>
                    {
                        (comparison?.quality !== Quality.NA) &&
                        (<SolidLucide data={getQualityIcon(comparison?.quality)} class={`${getQualityClass(comparison?.quality)} align-bottom me-1`}/>)
                    }
                    {comparison?.label}
                </div>
            )
        }
    </div>
}