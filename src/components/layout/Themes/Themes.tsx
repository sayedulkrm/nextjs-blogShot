"use client";
import React, { useContext } from "react";
import styles from "./themes.module.css";

import { PiMoonStarsFill, PiSunFill } from "react-icons/pi";
import { ThemeContext } from "@/context/ThemeContext";

const Themes = () => {
    const { theme, toggle }: any = useContext(ThemeContext);

    return (
        <div
            className={`${styles.container} ${
                theme === "dark" ? " bg-[#a1a1a1]" : "bg-[#1e1e1e]"
            }`}
            onClick={toggle}
        >
            <PiMoonStarsFill className="text-xl text-[#e9e9e9]" />
            <div
                className={`absolute h-8 w-8 rounded-full ${
                    theme === "dark"
                        ? "  bg-[#1e1e1e] border border-[#fff]"
                        : "bg-[#a1a1a1] border border-[#000]"
                }  ${
                    theme === "dark" ? "-translate-x-[5px]" : "translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            />
            <PiSunFill className="text-xl text-yellow-300" />
        </div>
    );
};

export default Themes;
