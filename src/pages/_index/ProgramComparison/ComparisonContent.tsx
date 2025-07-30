import "./ComparisonContent.scss"

import type { JSXElement } from "solid-js";
import type { Comparison, Criterion, Editor } from "../ProgramComparison";
import type { GetImageResult } from "astro";
import { data as comparisonData } from "../ProgramComparison";
import { CompairsonColumn } from "./ComparisonColumns";
import { rowClass } from "./ComparisonHelper"

function getComparisons(editorForColumn: Editor, filteredCriteriaEditorId: string): Comparison[] {
    return comparisonData.Criteria.reduce<Comparison[]>((filtered, criteria) => {
        if (criteria.comparisons.some(x => x.editorId == filteredCriteriaEditorId)) {
            filtered.push(...criteria.comparisons.filter(x => x.editorId == editorForColumn.id));
        }

        return filtered;
    }, []);
}

function getColumn(editorForColumn: Editor, filteredCriteriaEditorId: string, editorIcons: { id: string, image: GetImageResult }[] ): JSXElement {
    return <CompairsonColumn editor={editorForColumn} editorIcons={editorIcons} comparisons={getComparisons(editorForColumn, filteredCriteriaEditorId)} />
}

export function ComparisonContent(props: { editorIcons: { id: string, image: GetImageResult }[] }, selectorEditor: () => string): JSXElement {
    const getEditors = (): Editor[] => {
        return comparisonData.Editors.filter(x => x.id === "pixieditor" || x.id === selectorEditor());
    }

    const getCriteria = (): Criterion[] => {
        const editor = selectorEditor();

        return comparisonData.Criteria.filter(x => x.comparisons.some(x => x.editorId === editor));
    };

    return <div class="grid grid-cols-[auto_1fr_1fr] w-fit mx-auto mt-12">
        <div class="program-comparison-column">
            {
                getCriteria().map(criteria => 
                    <div class={`${rowClass} program-comparison-item mx-4 font-bold`}>{criteria.name}</div>
                )
            }
        </div>
        {getEditors().map(editor => (
            getColumn(editor, selectorEditor(), props.editorIcons)
        ))}
    </div>
}
