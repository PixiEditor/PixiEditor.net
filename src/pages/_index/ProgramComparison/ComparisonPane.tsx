import { createSignal, type JSXElement, type Setter, type Accessor } from "solid-js";
import type { GetImageResult } from "astro";
import type { Editor } from "../ProgramComparison";
import { ComparisonContent } from "./ComparisonContent";
import { data } from "../ProgramComparison";

function EditorIcon(editor: { id: string, image: GetImageResult }, selectedEditor?: Accessor<string>, setSelectedEditor?: Setter<string>): JSXElement {
    function handleClick() {
        console.log(editor.id);
        if (setSelectedEditor) setSelectedEditor(editor.id);
    }

    const opacityClass = (): string => selectedEditor ? (editor.id === selectedEditor() ? "opacity-100" : "opacity-50") : "opacity-100";

    return <button type="button" class={`inline active:scale-90 ${opacityClass()} cursor-pointer hover:opacity-80 transition-[transform,opacity]`} onclick={handleClick}>
        <img src={editor.image.src} {...editor.image.attributes} alt={editor.id} class={`inline ${(selectedEditor ? "border border-neutral-700 rounded-lg" : "")}`} />
    </button>
}

export function ComparisonPane(props: { editorIcons: { id: string, image: GetImageResult }[] }): JSXElement {
    const [selectedEditor, setSelectedEditor] = createSignal<string>("photoshop");

    const pixiEditorIcon = props.editorIcons.find(x => x.id === "pixieditor")!;
    const otherEditors = props.editorIcons.filter(x => x.id !== "pixieditor")!;

    return <div class="overflow-auto">
        <h1 class="text-3xl text-center">Why to choose {EditorIcon(pixiEditorIcon)} over <span class="inline-flex gap-2">{otherEditors.map(editor => EditorIcon(editor, selectedEditor, setSelectedEditor))}</span> ?</h1>
        
        {ComparisonContent(props, selectedEditor)}
    </div>
}