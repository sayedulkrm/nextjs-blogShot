import React from "react";

import style from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
    return (
        <section className="w-full h-full">
            <h1 className="text-5xl font-bold w-full text-center my-5 relative leading-relaxed">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x">
                    Embark on a Journey of Discovery
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 animate-gradient-x">
                    with Our Inspiring Blog
                </span>
            </h1>
            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-10 my-14">
                {/* image */}

                <Image
                    src={
                        "https://images.unsplash.com/photo-1646330024721-d726c353e519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    }
                    alt="blogpage"
                    height={800}
                    width={500}
                    className="rounded-md"
                />

                {/* text */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl font-semibold text-center md:text-left leading-relaxed ">
                        Embark on a Journey of Exploration and Imagination as We
                        Unveil Captivating Stories, Expert Insights, and
                        Inspiring Adventures from Around the Globe, Igniting
                        Your Curiosity and Passion for Life's Remarkable
                        Wonders.
                    </h2>

                    <Link
                        href={"/"}
                        className="px-3 py-2 self-center md:self-start bg-yellow-300 text-black font-semibold shadow-md hover:bg-yellow-500 duration-200 w-fit rounded-md"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Featured;
