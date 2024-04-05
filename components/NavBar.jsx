import Link from "next/link";

export function NavBar(){
    return(
        <nav>
        <ul className="flex flex-row gap-3">
        <li className="ml-auto w-24 text-center">
                <Link href='/' className="italic hover:font-bold">
                    home
                </Link>
            </li>
            <li className="w-24 text-center"> 
                <Link href='/projects' className="italic hover:font-bold">
                    projects
                </Link>
            </li>
            <li className="w-24 text-center"> 
                <Link href='/contact' className="italic hover:font-bold">
                    contact
                </Link>
            </li>
        </ul>
    </nav>
    )
}