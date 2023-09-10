import React from "react";

import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsDiscord } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Themes from "../Themes/Themes";
import AuthLinks from "@/components/Auth/AuthLinks/AuthLinks";

const Navbar = () => {
    return (
        <header className={styles.container}>
            <div className="flex flex-row items-center justify-between w-full p-5">
                {/* Social */}
                <div className="flex justify-start items-center gap-5 w-full">
                    <BsFacebook className="text-2xl hover:text-blue-300 duration-200 cursor-pointer" />
                    <FaXTwitter className="text-2xl hover:text-blue-300 duration-200 cursor-pointer" />
                    <BsDiscord className="text-2xl hover:text-blue-300 duration-200 cursor-pointer" />
                </div>

                {/* Logo */}
                <h1 className="w-full text-3xl font-bold font-mono text-center">
                    Blog<span className="text-yellow-400">-Shot</span>
                </h1>

                {/* Links */}
                <div className="flex flex-row items-center justify-end gap-5 w-full">
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
