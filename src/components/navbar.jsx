"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/project", title: "Porject" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
        <div className="md:hidden lg:flex  justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-full p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1 ml-1">Nipuna</span>
          <span className="w-20 h-8 rounded-full bg-white text-black flex items-center justify-center">
            .Chamod
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 justify-center">
        {/* Links */}
        {links.map((link) => (
         <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      
      <div className="hidden md:flex gap-4 ">
        {/* Social */}
        <Link href="https://github.com/nipunac99">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://github.com/nipunac99">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://github.com/nipunac99">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>

        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 font-medium text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
