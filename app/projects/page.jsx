import Heading from "../../components/Heading";
import { getProjects } from "../../lib/projects";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectsPage(){
    const projects = await getProjects(6);
    projects.map((project) => project.slug).join(',')
    return(
    <>
        <Heading>
            Projects
        </Heading>
        <ul className="flex fle-row flex-wrap gap-3">
            {
                projects.map((project, index) => (
                    <li key={project.slug} className="bg-white border rounded shadow w-80 hover:shadow-xl">
                <Link href={`/projects/${project.slug}`}>
                    <Image src={project.image} alt="" priority={index === 0} 
                        width="320" height="120" className="rounded-t">
                    </Image>
                    <h2 className="font-semibold py-1 text-center">
                        {project.title}
                    </h2>
                </Link>
                    </li>
                ))
            }

        </ul>
    </>
    );
}