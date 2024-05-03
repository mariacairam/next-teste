import { NavFooter } from "@/components/NavFooter";
import { Footer } from "@/components/Footer";
import { NavBar } from "../components/NavBar";
import Image from "next/image";
import './global.css';


export default function RootLayout({ children }){
    return(
        <html lan="en">
            <body className=" bg-black flex flex-col items-center
             min-h-screen text-white">
                <div className="fixed z-10 w-full grid grid-cols-12 gap-1 sm:gap-5">
                    <header className="z-10 relative mt-6 col-start-7 col-end-12">
                        <NavBar></NavBar>
                    </header>
                </div>
                <div className="absolute w-full grid grid-cols-12 gap-1 sm:gap-5">
                    <div className="z-0 flex flex-col gap-12 absolute w-full">
                        <div>
                            <main className="h-full grid grid-cols-12 gap-1 sm:gap-5">
                                {children}
                            </main>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </body>
        </html>
    )
}