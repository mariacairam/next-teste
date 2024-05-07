import { marked } from "marked";
import qs from 'qs';

export const CACHE_TAG_PROJECTS = 'projects';

const CMS_URL = process.env.CMS_URL;
 

export async function getProject(slug){
    const { data } = await fetchProjects({
        filters: {slug: {$eq: slug}},
        fields: ['slug', 'title', 'description', 'publishedAt', 
        'expertise', 'location', 'date', 'lead', 'credits'],
        sort: ['publishedAt:desc'],
    }); 
    if (data.length === 0) {
        return null;
    }
    const item = data[0].attributes;

        return {
            slug: item.slug,
            title: item.title, 
            description: marked(item.description),
            expertise: item.expertise,
            location: item.location,
            date: item.date,
            lead: item.lead,
            credits: marked(item.credits),
           // header: CMS_URL + item.header.data.attributes.url,
            /*image: new URL(item.image.data[0].attributes.url, CMS_URL).href*/
        };
}

export async function getProjects(pageSize){
    const { data } = await fetchProjects({
        fields: ['slug', 'title', 'publishedAt'],
        populate: { images: {fields: ['url']}},
        sort: ['publishedAt:desc'],
    }); 

    return data.map(({ attributes }) => ({
        slug: attributes.slug,
        title: attributes.title,
        date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
        images: CMS_URL + attributes.images.data[0].attributes.url,
      })); 
}

export async function getImages(slug){
    const { data } = await fetchProjects({
        filters: {slug: {$eq: slug}},
        populate: { images: {fields: ['url']}},
        sort: ['publishedAt:desc'],
    }); 
    if (data.length === 0) {
        return null;
    }
    const images = data[0].attributes.images.data;

    return images.map(({ attributes }) => ({
        url: new URL(attributes.url, CMS_URL).href,
    }));
}

export async function getVideo(slug){
    const { data } = await fetchProjects({
        filters: {slug: {$eq: slug}},
        fields: ['video'],
        sort: ['publishedAt:desc'],
    }); 
    if (data.length === 0) {
        return null;
    }
    const video = JSON.parse(data[0].attributes.video);


    return video.rawData.html
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

    if (!response.ok) {
        throw new Error(`CMS returned ${response.status} for ${url}`);
      }
      return await response.json();
    }
