import { NavFooter } from "./NavFooter";
import Image from "next/image";

export function Footer(){
    return (
        <>
            <footer className="mt-auto flex flex-row justify-between
                text-center items-end text-3xs lg:text-2xs sh-32 w-full md:w-5/6 pb-8">
                <div className="flex flex-row gap-6 lg:gap-12 xl:gap-36 items-end">
                    <div className="pb-1"><NavFooter/></div>
                    <div className="pb-1">
                        <p>@2024 X-TOPIA ALL RIGHTS RESERVED</p>
                    </div>
                    <div className="pb-1 flex flex-row justify-content-center gap-1 items-center">
                        <img src="/images/insta.png" alt="" width="12" height="12"/>
                        <p>INSTAGRAM</p>
                    </div>
                </div>
                <div className="flex flex-row justify-content-end">
                    <Image src="/images/xtopia.png" alt="" width="200" height="150" className="w-28 h-auto sm:w-32 md:w-36"></Image>
                </div>
                </footer>
        </>
    );
}