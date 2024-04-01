import { marked } from "marked";
import qs from 'qs';

export const CACHE_TAG_PROJECTS = 'projects';

const CMS_URL = process.env.CMS_URL;
 

export async function getProject(slug){
    const { data } = await fetchProjects({
        filters: {slug: {$eq: slug}},
        fields: ['slug', 'title', 'description', 'publishedAt'],
        populate: { image: {fields: ['url']}},
        sort: ['publishedAt:desc'],
    }); 
    if (data.length === 0) {
        return null;
    }
    const item = data[0].attributes;
    console.log(item);

        return {
            slug: item.slug,
            title: item.title,
            description: marked(item.description),
            image: new URL(item.image.data[0].attributes.url, CMS_URL).href,
        };
}

export async function getProjects(pageSize){
    const { data } = await fetchProjects({
        fields: ['slug', 'title', 'publishedAt'],
        populate: { image: {fields: ['url']}},
        sort: ['publishedAt:desc'],
    }); 

    console.log(data);


    return data.map(({ attributes }) => ({
        slug: attributes.slug,
        title: attributes.title,
        date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
        image: CMS_URL + attributes.image.data[0].attributes.url,
      })); 
}

async function fetchProjects(parameters) {
    const url = `${CMS_URL}/api/projects?`
    + qs.stringify(parameters, { encodeValuesOnly: true });
    console.log(url);
    const response = await fetch (url, {
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            tags: [CACHE_TAG_PROJECTS],
        },
    });
    console.log(response);
    if (!response.ok) {
        throw new Error(`CMS returned ${response.status} for ${url}`);
      }
      return await response.json();
    }
