import { createSignal, type JSXElement } from "solid-js";

interface Method {
    name: string,
    command: (packageName: string, version: string) => string,
    isCli: boolean
};

const methods: Method[] = [
    {
        name: ".NET CLI",
        command: (p, v) => `dotnet add ${p} --verison ${v}`,
        isCli: true
    },
    {
        name: "Package Manager",
        command: (p, v) => `Install-Package ${p} -Version ${v}`,
        isCli: true
    },
    {
        name: "PackageReference",
        command: (p, v) => `<PackageReference Include="${p}" Version="${v}" />`,
        isCli: false
    },
    {
        name: "Name",
        command: p => p,
        isCli: false
    },
];

function tabContent(thisMethod: Method, currentMethod: () => Method, props: { package: string, version: string }): JSXElement {
    const classes = `flex items-center ${getClassForMethod(thisMethod, currentMethod)}`;
    const command = thisMethod.command(props.package, props.version);

    return <div class={classes}>
        <span>{thisMethod.isCli && (<span class="text-neutral-400 font-thin select-none">$ </span>)}<code>{command}</code></span>
        <button class="px-button-soft ms-auto active:scale-95 transition-transform" onclick={() => navigator.clipboard.writeText(command)}>Copy</button>
    </div>
}

function getClassForMethod(thisMethod: Method, currentMethod: () => Method) {
    return currentMethod() === thisMethod ? "" : "hidden";
}

export default function NugetPackageReference(props: { package: string, version: string }) {
    const [currentMethod, setMethod] = createSignal(methods[0]);

    return <div class="w-full max-w-4xl">
        <div class="grid grid-cols-[auto_1fr]">
            <ul class="flex gap-2 px-2 pt-2 bg-neutral-910 w-fit rounded-t-xl" role="tablist">
                {
                    methods.map(x => {
                        const colorClass = currentMethod() === x ? "bg-neutral-800" : "bg-neutral-900";
                        return <li class={`${colorClass} hover:bg-neutral-700 transition-colors cursor-pointer rounded font-semibold`}>
                            <button class="cursor-[unset] p-2 px-3 active:scale-x-95 transition-transform" onClick={() => setMethod(x)}>{x.name}</button>
                        </li>
                    })
                }
            </ul>

            <div class="mt-auto">
                <div class="bg-neutral-910 w-2 h-2"><div class="bg-neutral-800 w-2 h-2 rounded-bl-xl"></div></div>
            </div>
        </div>

        <div class="bg-neutral-910 p-2 rounded-xl rounded-tl-none">
            <div class="bg-neutral-900 p-2 w-full rounded">
                {
                    methods.map(x => tabContent(x, currentMethod, props))
                }
            </div>
        </div>
    </div>
}
