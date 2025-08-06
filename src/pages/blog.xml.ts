import rss, { type RSSOptions } from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getBlogPath } from "@content/contentHelper";

export const GET: APIRoute = async (context) => {
    const blog = await getCollection('blog');
    const selfUrl = new URL("/blog.xml", context.site);

    const options: RSSOptions = {
        title: 'PixiEditor Blog',
        description: 'The blog for the universal open source 2D editor PixiEditor',
        site: new URL("/", context.site),
        xmlns: {
            "atom": "http://www.w3.org/2005/Atom"
        },
        items: blog.map((post) => {
            return {
                title: post.data.title,
                pubDate: post.data.date,
                description: post.data.description,
                link: getBlogPath(post)
            }
        }),
        customData: `<language>en-us</language>\n<atom:link href="${selfUrl}" rel="self" type="application/rss+xml" />`,
    };

    return rss(options);
};