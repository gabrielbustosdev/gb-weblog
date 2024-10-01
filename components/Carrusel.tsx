"use client"

import { dataSkills } from "@/data";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Carrusel() {

    const [duplicatedIcons, setDuplicatedIcons] = useState(dataSkills);

    useEffect(() => {
        setDuplicatedIcons([...dataSkills, ...dataSkills, ...dataSkills]);
    }, []);


    return (
        <div className="overflow-hidden w-full pt-10">
            <motion.div 
                className="flex items-center space-x-4"
                animate={{ x: ["100%", "-500%"] }}
                transition={{ 
                    x: { 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 30, 
                        ease: "linear" 
                    },
                }}
            >
                {duplicatedIcons.map((skill) => (
                    <div key={skill.id} className="flex flex-col items-center">
                        <img src={skill.imageUrl} alt={skill.title} className="w-16 h-16" />
                        <p className="mt-2 text-sm">{skill.title}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}