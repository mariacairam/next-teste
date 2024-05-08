import GridToList from "@/components/GridToList";

export default function NewsPage(){
    return(
        <>
        <div className="flex flex-col gap-2 md:gap-5 col-start-2 col-end-12 mt-32">
          <div className="text-2xl md:text-4xl mb-0 md:mb-2">News</div>
          <div className="grid text-neutral-500 border-neutral-600 grid-cols-10 gap-1 md:gap-5 
          text-base md:text-xl border-y h-10 md:h-14 mt-0 md:mt-2 mb-4 md:mb-0">
            <div className="text-neutral-600 content-center col-span-1">
                <p>Filter</p>
            </div>
            <button className="col-start-2 col-end-3 text-start">Lectures</button>
            <button className="col-start-3 col-end-5 text-start">Exhibitions</button>
          </div>
          <GridToList></GridToList>
        </div>
          </>
    )
}