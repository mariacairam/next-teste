import Link from "next/link";

export function NavFooter(){
    return(
        <>
        <nav>
            <ul className="flex flex-col gap-2 text-left mt-2">
                <li>
                <Link href='/projects'>PROJECTS</Link>
                </li>
                <li>
                <Link href='/publications'>PUBLICATIONS</Link>
                </li>
                <li>
                <Link href='/about'>ABOUT</Link>
                </li>
                <li>
                <Link href='/news'>NEWS</Link>
                </li>
                <li>
                <Link href='/contact'>CONTACT</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}