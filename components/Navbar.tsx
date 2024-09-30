"use client"

import Link from "next/link";

import { itemsNavbar } from "@/data";

import { MotionTransition } from "./TransitionComponents";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-5">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/30 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-gbDark ${router === item.link && 'bg-gbDark '}`}
                            data-tooltip-target="tooltip-default">
                            <Link href={item.link}>{item.icon} </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;