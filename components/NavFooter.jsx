import Link from "next/link";

export function NavFooter(){
    return(
        <>
        <nav>
            <ul className="flex flex-col gap-2 text-left">
                <li>
                <Link href='/projects'>PROJECTS</Link>
                </li>
                <li>
                <Link href='/'>PUBLICATIONS</Link>
                </li>
                <li>
                <Link href='/'>ABOUT</Link>
                </li>
                <li>
                <Link href='/'>NEWS</Link>
                </li>
                <li>
                <Link href='/contact'>CONTACT</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}