import { DoubleResearch } from "./DoubleResearch";
import Image from "next/image";

export function GridResearch({items}){
    let len = items.length;
    if(len % 2 === 0){
        let renderedItems = [];
        for(let i =0; i < len; i +=2){
            renderedItems.push(
                <DoubleResearch key={(i+1)/2} item={items[i]} item2={items[i+1]}></DoubleResearch>
            );
            }
        return(renderedItems);
    } else {
        let renderedItems = [];
        for(let i =0; i < len; i +=2){
            if(i===len-1){
                renderedItems.push(
                <div className="flex flex-col gap-5 col-start-1 col-end-11">
                    <div className="flex flex-col md:grid md:grid-cols-10 gap-5">
                        <div className="col-span-10 md:col-span-5">
                            <div className="grid grid-cols-10 md:grid-cols-5 gap-5">
                                <div className="col-start-1 col-end-3 md:col-start-1 md:col-end-1 relative width-full aspect-2/3">
                                    <Image src={items[i].image} fill={true} alt="" className="absolute w-full h-auto object-cover"></Image>
                                </div>
                                <div key={(i+1)/2} className="flex flex-col col-start-3 col-end-11 md:col-start-2 md:col-end-5 gap-2">
                                    <p className="text-3xs md:text-xs text-neutral-400">{items[i].year}</p>
                                    <p className="text-2xs md:text-sm">{items[i].citation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
            } else {
                renderedItems.push(
                    <DoubleResearch key={(i+1)/2} item={items[i]} item2={items[i+1]}></DoubleResearch>
                ) 
            }
        }
        return renderedItems
    }
}