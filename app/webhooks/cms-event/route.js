import { revalidateTag } from "next/cache";
import { CACHE_TAG_PROJECTS } from "../../../lib/projects";
import { CACHE_TAG_BOOKS, CACHE_TAG_RESEARCHES } from "@/lib/publications";

export async function POST(request) {
    const payload = await request.json();
    console.log("revalidated");
    if (payload.model === 'project'){
        revalidateTag(CACHE_TAG_PROJECTS);
    } else if (payload.model === 'book'){
        revalidateTag(CACHE_TAG_BOOKS);
    } else if (payload.model === 'research'){
        revalidateTag(CACHE_TAG_RESEARCHES);
    }
    return new Response(null, {status: 204});
}