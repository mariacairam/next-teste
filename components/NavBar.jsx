import Link from "next/link";

export function NavBar(){
    return(
        <nav>
        <ul className="flex flex-row gap-3">
        <li className="ml-auto w-24 text-center">
                <Link href='/' className="hover:font-bold">
                    Home
                </Link>
            </li>
            <li className="w-24 text-center"> 
                <Link href='/projects' className="hover:font-bold">
                    Projects
                </Link>
            </li>
        </ul>
    </nav>
    )
}