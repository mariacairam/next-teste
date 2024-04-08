import { NavFooter } from "@/components/NavFooter";
import { Footer } from "@/components/Footer";
import { NavBar } from "../components/NavBar";
import Image from "next/image";
import './global.css';


export default function RootLayout({ children }){
    return(
        <html lan="en">
            <body className=" bg-black flex flex-col items-center
             py-2 px-8 md:px-20 min-h-screen text-white">
                <header className="w-full mt-3 grid">
                    <NavBar></NavBar>
                </header> 
                <main className="w-full md:w-5/6 mb-12">
                    { children }
                </main>
                <Footer></Footer>
            </body>
        </html>
    )
}