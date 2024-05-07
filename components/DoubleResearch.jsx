import Image from "next/image";

export function DoubleResearch({ item, item2, index }) {
    return (
        <div key={index} className="flex flex-col gap-5 col-start-1 col-end-11">
            <div className="flex flex-col md:grid md:grid-cols-10 gap-5">
                <div className="border-neutral-600 col-span-10 md:col-span-5 border-b pb-5 md:py-0 md:border-y-0">
                    <div className="grid grid-cols-10 md:grid-cols-5 gap-5">
                        <div className="col-start-1 col-end-3 md:col-start-1 md:col-end-1 relative w-full aspect-2/3">
                            <Image src={item?.image} fill={true} alt="" className="absolute w-full h-auto object-cover" />
                        </div>
                        <div className="flex flex-col col-start-3 col-end-11 md:col-start-2 md:col-end-5 gap-2">
                            <p className="text-3xs md:text-xs text-neutral-400">{item?.year}</p>
                            <p className="text-2xs md:text-sm">{item?.citation}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 md:col-span-5">
                    <div className="grid grid-cols-10 md:grid-cols-5 gap-5">
                        <div className="col-start-1 col-end-3 md:col-start-1 md:col-end-1 relative w-full aspect-2/3">
                            <Image src={item2?.image} fill={true} alt="" className="absolute w-full h-auto object-cover" />
                        </div>
                        <div className="flex flex-col col-start-3 col-end-11 md:col-start-2 md:col-end-5 gap-2">
                            <p className="text-3xs md:text-xs text-neutral-400">{item2?.year}</p>
                            <p className="text-2xs md:text-sm">{item2?.citation}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-neutral-600 border-b" />
        </div>
    );
}