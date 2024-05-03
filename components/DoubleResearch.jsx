export function DoubleResearch({ item, item2, index }) {
    return (
        <div key={index} className="flex flex-col gap-5 col-start-1 col-end-10">
            <div className="flex flex-col md:grid md:grid-cols-10 gap-5">
                <div className="col-span-10 md:col-span-5">
                    <div className="grid grid-cols-10 md:grid-cols-5 gap-5">
                        <div className="col-span-3 md:col-span-2 relative w-full aspect-2/3">
                            <Image src={item?.image} fill={true} alt="" className="absolute w-full h-auto object-cover" />
                        </div>
                        <div className="col-span-7 md:col-span-3 flex flex-col gap-2">
                            <p className="text-3xs md:text-xs text-neutral-400">{item?.year}</p>
                            <p className="text-2xs md:text-base">{item?.citation}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 md:col-span-5">
                    <div className="grid grid-cols-10 md:grid-cols-5 gap-5">
                        <div className="col-span-3 md:col-span-2 relative w-full aspect-2/3">
                            <Image src={item2?.image} fill={true} alt="" className="absolute w-full h-auto object-cover" />
                        </div>
                        <div className="col-span-7 md:col-span-3 flex flex-col gap-2">
                            <p className="text-3xs md:text-xs text-neutral-400">{item2?.year}</p>
                            <p className="text-2xs md:text-base">{item2?.citation}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-neutral-600 border-b" />
        </div>
    );
}