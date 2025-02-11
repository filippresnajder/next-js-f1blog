"use client";

import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [activeDropdown, setDropdown] = useState(false);
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 font-formula uppercase text-sm">
            <div className="flex justify-between md:justify-center items-center bg-red-900 text-white h-auto z-50 relative">
                <Link href="/">
                    <Image
                        className="p-4"
                        src="/f1logo.png"
                        alt="f1-logo"
                        width={120}
                        height={60}
                    />
                </Link>
                <button className="hidden md:block hover:opacity-50" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <button onClick={() => setDropdown(!activeDropdown)}>
                    {activeDropdown ?
                        <IoMdClose className="block md:hidden m-4 hover:opacity-50"/>
                        :
                        <GiHamburgerMenu className="block md:hidden m-4 hover:opacity-50"/>
                    }
                </button>
            </div>
            <div className="hidden md:block bg-red-700 text-white">
                <ul className="flex flex-row justify-center">
                    <Link href="/"><li className="p-2 hover:opacity-50">Home</li></Link>
                    <Link href="/drivers"><li className="p-2 hover:opacity-50">Drivers</li></Link>
                    <Link href="/teams"><li className="p-2 hover:opacity-50">Teams</li></Link>
                    <Link href="/calendar"><li className="p-2 hover:opacity-50">Calendar</li></Link>
                </ul>
            </div>
            <div className={activeDropdown ?
                "md:hidden absolute overflow-hidden top-[53px] z-40 w-full bg-red-700 text-white ease-in-out duration-300"
                : "md:hidden absolute top-[-500px]"}>
                <ul className="flex flex-col justify-center -z-10">
                    <Link href="/"><li className="p-2 border-b-2 w-4/12 border-red-800 mx-4 hover:opacity-50">Home</li></Link>
                    <Link href="/drivers"><li className="p-2 border-b-2 w-4/12 border-red-800 mx-4 hover:opacity-50">Drivers</li></Link>
                    <Link href="/teams"><li className="p-2 border-b-2 w-4/12 border-red-800 mx-4 hover:opacity-50">Teams</li></Link>
                    <Link href="/calendar"><li className="p-2 border-b-2 w-4/12 border-red-800 mx-4 hover:opacity-50">Calendar</li></Link>
                    <button onClick={() => setDarkMode(!darkMode)} className="p-2 border-b-2 w-4/12 border-red-800 mx-4 hover:opacity-50 text-left uppercase">{darkMode ? "Light Mode" : "Dark Mode"}</button>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar