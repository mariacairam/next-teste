import { NavFooter } from "./NavFooter";
import Image from "next/image";

export function Footer(){
    return (
        <>
            <footer className="mt-auto flex flex-row justify-between
                text-center items-end text-xs h-32 w-5/6 pb-8">
                <div className="flex flex-row gap-36 items-end">
                    <div className="pb-4"><NavFooter/></div>
                    <div className="pb-4">
                        <p>@2024 X-TOPIA ALL RIGHTS RESERVED</p>
                    </div>
                    <div className="pb-4 flex flex-row justify-content-center gap-1 items-center">
                        <img src="/images/insta.png" alt="" width="12" height="12"/>
                        <p>INSTAGRAM</p>
                    </div>
                </div>
                <div className="flex flex-row justify-content-end">
                    <Image src="/images/xtopia.png" alt="" width="240" height="180"></Image>
                </div>
                </footer>
        </>
    );
}