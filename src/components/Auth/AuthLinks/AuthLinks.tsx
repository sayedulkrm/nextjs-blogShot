import Link from "next/link";
import React from "react";

const AuthLinks = () => {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                <div className="flex gap-4 items-center ">
                    <Link
                        className="text-lg font-semibold hover:text-yellow-300 duration-200"
                        href={"/profile"}
                    >
                        Profile
                    </Link>
                    <button className="bg-yellow-400 py-2 px-3 hover:bg-yellow-600 font-semibold duration-200 rounded-md">
                        Logout
                    </button>
                </div>
            ) : (
                <div className="text-lg font-semibold hover:text-yellow-300 duration-200">
                    <Link href={"/login"}>Login</Link>
                </div>
            )}
        </>
    );
};

export default AuthLinks;
