import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="h-[100px] bg-black text-white font-semibold">
            <div className="p-4 h-full flex justify-between items-center max-w-[1400px] mx-auto">
                <div>
                    <Link href={"/"}>
                        <h2>Home</h2>
                    </Link>
                </div>
                <div>
                    <ul className="flex gap-10">
                        <li>
                            <Link href={"/atomicity"}>Atomicity</Link>
                        </li>
                        <li>
                            <Link href={"/consistency"}>Consistency</Link>
                        </li>
                        <li>
                            <Link href={"/isolation"}>Isolation</Link>
                        </li>
                        <li>
                            <Link href={"/durability"}>Durability</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
