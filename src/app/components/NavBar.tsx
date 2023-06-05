'use client';

import {useState} from "react";
import Link from "next/link";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-[0.25rem] w-8 my-[0.2rem] rounded-full bg-black transition ease transform duration-300`;

    return (
        <nav className="
        border-b-2
        border-seaBlue
        h-20
        bg-white
        top-0
        w-screen
        flex
        items-center
        px-4
        justify-between
        ">   
            <Link 
            href="/"
            >
                <img className="h-36 ml-[-0.6rem] rounded-full transition-transform duration-300 transform hover:opacity-100" 
                    src="./../PSDlogoBlack.svg" 
                    alt="PoSciDon logo"/>
            </Link>
            <div className="flex">
                <div className="hidden md:flex sm:flex sm:text-xl font-black sm:gap-8 sm:pt-[0.26rem]">
                    <Link 
                    href="/get-started"
                    className="hover:text-seaBlue"
                    >
                        Get Started
                    </Link>
                    <Link 
                    href="/about"
                    className="hover:text-seaBlue"
                    >
                        About
                    </Link>
                    <Link 
                    href="/projects"
                    className="hover:text-seaBlue"
                    >
                        Projects
                    </Link>
                </div>
                <div className="flex ml-12">
                    <button
                        className="h-9 w-6 rounded flex flex-col justify-center items-center group"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div
                            className={`${genericHamburgerLine} ${
                                isOpen
                                    ? "mb-[0.35rem] rotate-45 translate-y-3 group-hover:bg-seaBlue group-hover:opacity-100"
                                    : "group-hover:bg-seaBlue group-hover:opacity-100"
                            }`}
                        />
                        <div className={`${genericHamburgerLine} ${isOpen 
                            ? "opacity-0" 
                            : "group-hover:bg-seaBlue group-hover:opacity-100"}`} />
                        <div
                            className={`${genericHamburgerLine} ${
                                isOpen
                                    ? "-rotate-45 -translate-y-3 group-hover:bg-seaBlue group-hover:opacity-100"
                                    : "group-hover:bg-seaBlue group-hover:opacity-100"
                            }`}
                        />
                    </button>
                </div>
            </div>
        </nav>
    )
  }