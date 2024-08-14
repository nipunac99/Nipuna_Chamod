"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {
    const pathName = usePathname();

    console.log(pathName)
    return(
       <Link className={`rounded-full pr-3 pl-3 px-2 py-2 text-2xl font-medium transition duration-700 ease-in-out ${pathName === link.url && "bg-black text-white "}`} href={link.url}>
        {link.title}
       </Link>
    )
}

export default NavLink
