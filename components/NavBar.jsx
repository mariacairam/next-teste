import Link from "next/link";

export function NavBar(){
    return(
        <nav className="w-1/2 justify-self-end">
        <ul className="grid grid-cols-5 justify-items-stretch mb-4">
        <li className="text-center">
                <Link href='/' className="italic hover:font-bold">
                    home
                </Link>
            </li>
            <li className=" text-center"> 
                <Link href='/publications' className="italic hover:font-bold">
                    publications
                </Link>
            </li>
            <li className="text-center"> 
                <Link href='/projects' className="italic hover:font-bold">
                    projects
                </Link>
            </li>
            <li className="text-center"> 
                <Link href='/about' className="italic hover:font-bold">
                    about
                </Link>
            </li>
            <li className="text-center"> 
                <Link href='/contact' className="italic hover:font-bold">
                    contact
                </Link>
            </li>
        </ul>
    </nav>
    )
}