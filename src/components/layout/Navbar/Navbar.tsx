"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsDiscord } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Themes from "../Themes/Themes";
import AuthLinks from "@/components/Auth/AuthLinks/AuthLinks";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className={styles.container}>
            <div className="flex flex-row items-center justify-between w-full p-5">
                {/* Mobile Sidebar Toggle Button */}
                <button
                    onClick={toggleSidebar}
                    className="md:hidden text-2xl hover:text-blue-300 duration-200 cursor-pointer"
                >
                    &#9776; {/* This is the Unicode for the hamburger icon */}
                </button>

                {/* Social */}
                <div className="hidden md:flex justify-start items-center gap-5 w-full">
                    <BsFacebook className="text-2xl hover:text-blue-300 duration-200 cursor-pointer" />
                    <FaXTwitter className="text-2xl hover:text-blue-300 duration-200 cursor-pointer" />
                    <BsDiscord className="text-2xl hover:text-blue-300 duration-200 cursor-pointer" />
                </div>

                {/* Logo */}
                <h1 className="w-full text-3xl font-bold font-mono text-center">
                    Blog<span className="text-yellow-400">-Shot</span>
                </h1>

                {/* Links (Mobile Sidebar) */}
                {isSidebarOpen && (
                    <div className="md:hidden absolute top-0 right-0 h-full bg-yellow-100 w-1/2 p-5 shadow-md text-black z-50">
                        <div className="flex flex-col items-end gap-5 ">
                            <Themes />

                            <Link
                                href={"/"}
                                className="text-lg font-semibold hover:text-yellow-300 duration-200"
                            >
                                Home
                            </Link>

                            <Link
                                href={"/about"}
                                className="text-lg font-semibold hover:text-yellow-300 duration-200"
                            >
                                About
                            </Link>

                            <Link
                                href={"/contact"}
                                className="text-lg font-semibold hover:text-yellow-300 duration-200"
                            >
                                Contact
                            </Link>

                            <AuthLinks />
                        </div>
                    </div>
                )}

                {/* Links (Desktop) */}
                <div className="hidden md:flex md:flex-row items-center justify-end gap-5 w-full">
                    <Themes />

                    <Link
                        href={"/"}
                        className="text-lg font-semibold hover:text-yellow-300 duration-200"
                    >
                        Home
                    </Link>

                    <Link
                        href={"/about"}
                        className="text-lg font-semibold hover:text-yellow-300 duration-200"
                    >
                        About
                    </Link>

                    <Link
                        href={"/contact"}
                        className="text-lg font-semibold hover:text-yellow-300 duration-200"
                    >
                        Contact
                    </Link>

                    <AuthLinks />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
