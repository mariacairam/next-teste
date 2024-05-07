import Carousel from "@/components/Carousel";
import HTMLRenderer from "@/components/HTMLRenderer";
import ToggleButton from "@/components/ProjectButton";
import { getImages, getProject, getVideo } from "@/lib/projects";
import Image from "next/image";

export default async function projectPage({ params: { slug } }) {
  const images = await getImages(slug);
  const video = await getVideo(slug);
  const srcVideo = video.split('src="'); 
  const urlVideo = srcVideo[1].split('"')[0];
  const project = await getProject(slug); 

  return (
    <>
      <div className="flex relative max-h-fit col-span-12 col-start-1 col-end-13 mb-12">
        <Carousel images={images}></Carousel>
      </div>
      <div className="flex flex-col gap-5 col-start-2 col-end-12">
        <div className="text-4xl font-inter">{project.title}</div>
        <div className="grid grid-cols-10 col-flow-row gap-1 sm:gap-5">
          <div className="flex flex-col gap-2 col-start-1 col-end-11 xl:col-end-6">
            <div className="flex border-neutral-600 flex-row text-2xl border-y h-14 items-center mt-2 mb-2">
              <p className="text-neutral-500">Credits</p>
            </div>
            <div className="grid grid-cols-5 gap-1 sm:gap-5 col-start-1 xl:col-end-6 items-start 
            overflow-hidden md:h-fit border-b md:border-b-0 border-neutral-600">
              <div className="mb-5 grid grid-cols-10 gap-y-5 gap-1 sm:gap-5 xl:flex xl:flex-col xl:gap-7 col-start-1 col-end-6 xl:col-end-3 flex-wrap justify-between">
                <div className="col-start-1 col-end-4 xl:w-full ">
                  <p className="text-neutral-500">Expertise</p>
                  <p className="text-xl lg:text-2xl">{project.expertise}</p>
                </div>
                <div className="col-start-5 col-end-9 col-span-5 w-1/2 xl:w-full">
                  <p className="text-neutral-500">Location</p>
                  <p className="text-xl lg:text-2xl">{project.location}</p>
                </div>
                <div className="col-start-10 col-end-11 xl:w-full">
                  <p className="text-neutral-500">Date</p>
                  <p className="text-xl lg:text-2xl">{project.date}</p>
                </div>
                <div id="lead" className="hidden md:flex md:flex-col col-start-1 col-end-5 lg:w-full">
                  <p className="text-neutral-500">Project Lead</p>
                  <p className="text-xl lg:text-2xl">{project.lead}</p>
                </div>
              </div>
              <div id="credits" className="hidden md:flex md:flex-col gap-5 col-start-1 xl:col-start-3 col-end-6">
                <div>
                  <article
                    dangerouslySetInnerHTML={{ __html: project.credits }}
                    className="mb-5 grid grid-cols-10 gap-1 xl:block prose prose-slate flex-wrap justify-between"
                  />
                </div>
              </div>
            </div>
            <ToggleButton></ToggleButton>
          </div>
          <article
            dangerouslySetInnerHTML={{ __html: project.description }}
            className="text-base sm:text-lg prose prose-slate col-start-1 xl:col-start-6 col-end-11"
          />
        </div>
        <HTMLRenderer url={urlVideo}></HTMLRenderer>
        <div className="flex flex-row gap-5 col-start-2 col-end-12 border-neutral-600 border-b">
          <div className="py-2">Grid</div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5 grid-flow-row">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-video"
            >
              <Image
                src={image.url}
                alt=""
                fill={true}
                className="absolute w-full h-auto object-cover"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}