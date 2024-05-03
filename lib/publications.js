import { marked } from "marked";
import qs from 'qs';

export const CACHE_TAG_BOOKS = 'books';
export const CACHE_TAG_RESEARCHES = 'researchEs';

const CMS_URL = process.env.CMS_URL;
 

export async function getBooks(){
    const { data } = await fetchBooks({
        fields: ['year', 'title', 'publishedAt', 'authors', 'description'],
        populate: { image: {fields: ['url']}},
        sort: ['publishedAt:desc'],
    }); 

    console.log(data);


    return data.map(({ attributes }) => ({
        title: attributes.title,
        year: attributes.year,
        authors: attributes.authors,
        description: attributes.description,
        date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
        image: CMS_URL + attributes.image.data.attributes.url,
      })); 
}


async function fetchBooks(parameters) {
    const url = `${CMS_URL}/api/books?`
    + qs.stringify(parameters, { encodeValuesOnly: true });
    console.log(url);

    const response = await fetch (url, {
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            tags: [CACHE_TAG_BOOKS],
        },
    });

    if (!response.ok) {
        throw new Error(`CMS returned ${response.status} for ${url}`);
      }
      return await response.json();
    }

    export async function getResearches(){
    const { data } = await fetchResearches({
        fields: ['year', 'citation', 'publishedAt',],
        populate: { image: {fields: ['url']}},
        sort: ['publishedAt:desc'],
    }); 

    console.log(data);


    return data.map(({ attributes }) => ({
        citation: attributes.citation,
        year: attributes.year,
        date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
        image: CMS_URL + attributes.image.data.attributes.url,
      })); 
}


async function fetchResearches(parameters) {
    const url = `${CMS_URL}/api/researches?`
    + qs.stringify(parameters, { encodeValuesOnly: true });
    console.log(url);

    const response = await fetch (url, {
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            tags: [CACHE_TAG_RESEARCHES],
        },
    });

    if (!response.ok) {
        throw new Error(`CMS returned ${response.status} for ${url}`);
      }
      return await response.json();
    }