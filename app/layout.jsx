import { NavBar } from "../components/NavBar";
import './global.css';


export default function RootLayout({ children }){
    return(
        <html lan="en">
            <body className="flex flex-col items-center
             py-2 px-20 min-h-screen ">
                <header className="w-full mt-3">
                    <NavBar></NavBar>
                </header>
                <main className="w-5/6">
                    { children }
                </main>
                <footer className="mt-auto text-center text-xs">info@x-topia.org</footer>
            </body>
        </html>
    )
}