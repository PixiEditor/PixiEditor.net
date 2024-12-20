import type {Props} from "astro";

export interface IndexTabData {
    order: number,
    id: string;
    title: string;
    colorClass: string;
    iconType(_props: any): any;
    icon: string;
}