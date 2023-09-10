import React from "react";
import style from "./categoryList.module.css";
import Image from "next/image";

const CategoryList = () => {
    return (
        <section className="w-full h-full">
            <h1 className="text-2xl font-bold w-full my-5">
                Popular Categories
            </h1>
            <div className="w-full h-full flex gap-5">
                {/* single category   */}
                <div className="flex w-60 p-5">
                    <Image
                        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                        alt="blogpage"
                        className="rounded-full object-cover h-10 w-10"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
        </section>
    );
};

export default CategoryList;
