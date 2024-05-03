import { GridResearch } from "@/components/GridResearch";
import { getBooks, getResearches } from "@/lib/publications";
import Image from "next/image";

export default async function publicationsPage() {
  const books = await getBooks();
  const researches = await getResearches();

  return (
    <>
      <div className="flex flex-col gap-2 md:gap-5 col-start-2 col-end-12 mt-32">
        <div className="text-2xl md:text-4xl mb-0 md:mb-2">Publications</div>
        <div className="grid border-neutral-500 grid-cols-10 gap-1 md:gap-5 text-base md:text-2xl border-y h-10 md:h-14 mt-0 md:mt-2 mb-4 md:mb-0">
          <button className="text-neutral-500 col-span-2 md:col-span-1 text-left">Books</button>
          <button className="text-neutral-500 col-span-3 md:col-span-2 text-left">Research</button>
        </div>
        <div id="books" className="hidden flex-col gap-5">
          <div className="md:flex md:flex-row gap-5 text-base md:text-2xl hidden">
            <p className="text-neutral-500">Books</p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-16 flex-wrap justify-between">
            {books.map((book, index) => (
              <div className=" border-neutral-600 grid grid-cols-10 md:flex md:flex-col gap-3 border-b pb-5 md:py-0 md:border-y-0 h-fit">
                <div key={index} className="col-start-1 col-end-4 relative width-full aspect-2/3">
                  <Image
                    src={book.image}
                    alt=""
                    fill={true}
                    className="absolute w-full h-auto object-cover"
                  ></Image>
                </div>
                <div key={index} className="flex flex-col col-start-4 col-end-11 gap-2">
                  <div className="flex flex-col gap-1">
                  <p className="text-3xs md:text-xs text-neutral-400">{book.year}</p>
                  <p className="text-xs md:text-xl font-bold">{book.title}</p>
                  </div>
                  <p className="text-2xs md:text-base">{book.authors}</p>
                  <p className="text-3xs md:text-xs text-neutral-400">{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="researches" className="flex flex-col gap-5">
          <div className="md:flex md:flex-row gap-5 text-base md:text-2xl hidden">
            <p className="text-neutral-500">Research</p>
          </div>
          <div className="text-neutral-600 border-neutral-600 hidden md:grid grid-cols-10 gap-5 border-b h-8">
            <p className="col-start-1 col-end-2">Cover</p>
            <p className="col-start-2 col-end-4">Title and Details</p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-10 gap-5 md:grid-flow-row">
            <GridResearch items={researches}></GridResearch>
          </div>
        </div>
      </div>
    </>
  );
}
