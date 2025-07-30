import type {Props} from "astro";

export interface IndexTabData {
    order: number,
    id: string;
    title: string;
    backgroundClass: string;
    textClass: string;
    iconType(_props: any): any;
    icon: string;
}