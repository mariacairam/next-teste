import Heading from "@/components/Heading";
import Carousel from "@/components/Carousel";
import { getImages, getProject } from "@/lib/projects"
import Image from "next/image";

export default async function projectPage({params: {slug}}){
    const images = await getImages(slug);
    const project = await getProject(slug);
    
    return(
        <>
            <Heading>{project.title}</Heading>
            <dir className="flex flex-col gap-5">
                <article dangerouslySetInnerHTML={{__html:project.description}}
                className="prose prose-slate"/>
                <Carousel images={images}></Carousel>
            </dir>
        </>
    );
} 