"use client";

import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
    const [activeDropdown, setDropdown] = useState(false);

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
                <div className="hidden md:block mt-1 hover:opacity-50"><ThemeToggle/></div>
                <button onClick={() => setDropdown(!activeDropdown)}>
                    {activeDropdown ?
                        <IoMdClose className="block md:hidden m-4 hover:opacity-50" size={20}/>
                        :
                        <GiHamburgerMenu className="block md:hidden m-4 hover:opacity-50" size={20}/>
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
                    <div className="block md:hidden p-2 border-b-2 w-4/12 mx-4 border-red-800 hover:opacity-50 mb-1"><ThemeToggle/></div>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar