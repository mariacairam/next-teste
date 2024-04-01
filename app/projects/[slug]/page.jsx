import Heading from "@/components/Heading";
import { getProject } from "@/lib/projects"
import Image from "next/image";

export default async function projectPage({params: {slug}}){
    
    const project = await getProject(slug);
    return(
        <>
            <Heading>{project.title}</Heading>
            <dir className="flex fle-row gap-5">
                <article dangerouslySetInnerHTML={{__html:project.description}}
                className="prose prose-slate"/>
                <Image src={project.image} alt="" priority
                width="640" height="360"></Image>
            </dir>
        </>
    );
} 