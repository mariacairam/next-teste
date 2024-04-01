import { revalidateTag } from "next/cache";
import { CACHE_TAG_PROJECTS } from "../../../lib/projects";

export async function POST(request) {
    const payload = await request.json();
    if (payload.model === 'project'){
        revalidateTag(CACHE_TAG_PROJECTS);
    }
    return new Response(null, {status: 204});
}