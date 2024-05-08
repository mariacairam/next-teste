'use client';

export default function GridToList(){
    return(
        <>
        <div className="grid grid-cols-10 gap-5 col-start-2 col-end-12 border-neutral-600 border-b">
          <div className="py-2 col-start-1 col-end-2">Grid</div>
          <div className="py-2 col-start-2 col-end-3">List</div>
        </div>
        </>
    )
}