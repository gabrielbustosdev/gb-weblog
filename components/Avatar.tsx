"use client";

import Image from "next/image";

import { MotionTransition } from "./TransitionComponents";

export default function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/gabi-anime.svg" width="400" height="400" className="w-full h-full " alt="gabiAvatar " />
        </MotionTransition>
    )
}
