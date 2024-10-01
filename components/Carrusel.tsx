"use client"

import { dataSkills } from "@/data";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Carrusel() {
    const [duplicatedIcons, setDuplicatedIcons] = useState(dataSkills);
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    useEffect(() => {
        setDuplicatedIcons([...dataSkills, ...dataSkills, ...dataSkills]);
    }, []);

    useEffect(() => {
        const animateCarousel = async () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.scrollWidth;
                await controls.start({
                    x: [-containerWidth, 0],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: containerWidth / 100, // Ajusta este valor para cambiar la velocidad
                            ease: "linear"
                        },
                    },
                });
            }
        };

        animateCarousel();
    }, [controls, duplicatedIcons]);

    return (
        <div className="overflow-hidden w-full pt-10">
            <motion.div 
                ref={containerRef}
                className="flex items-center space-x-4"
                animate={controls}
            >
                {duplicatedIcons.map((skill, index) => (
                    <div key={`${skill.id}-${index}`} className="flex flex-col items-center">
                        <img src={skill.imageUrl} alt={skill.title} className="w-16 h-16" />
                        <p className="mt-2 text-sm">{skill.title}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}