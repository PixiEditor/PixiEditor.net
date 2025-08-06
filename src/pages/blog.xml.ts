import rss, { type RSSOptions } from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getBlogPath } from "@content/contentHelper";
import { getImage } from 'astro:assets';

export const GET: APIRoute = async (context) => {
    const blog = await getCollection('blog');
    const selfUrl = new URL("/blog.xml", context.site);

    const options: RSSOptions = {
        title: 'PixiEditor Blog',
        description: 'The blog for the universal open source 2D editor PixiEditor',
        site: new URL("/", context.site),
        xmlns: {
            "atom": "http://www.w3.org/2005/Atom",
            "media": "http://search.yahoo.com/mrss/" 
        },
        items: await Promise.all(blog.map(async (post) => {
            const image = post.data.cover ? await getImage({ src: post.data.cover!, format: "png" }) : undefined;
            const imageData = image ? `<media:content 
                    url="${new URL(image.src, context.site)}"
                    medium="image"
                    type="image/${image.options.format}"
                    width="${image.options.width}"
                    height="${image.options.height}" />` : undefined;

            return {
                title: post.data.title,
                pubDate: post.data.date,
                description: post.data.description,
                link: getBlogPath(post),
                customData: imageData
            }
        })),
        customData: `<language>en-us</language>\n<atom:link href="${selfUrl}" rel="self" type="application/rss+xml" />`,
    };

    return rss(options);
};