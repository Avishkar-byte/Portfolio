"use client";

import React from "react";

interface Skill {
    name: string;
    slug: string;
    color: string; // Brand color for hover effect
}

const SKILLS_ROW1: Skill[] = [
    { name: "React", slug: "react", color: "#61DAFB" },
    { name: "TypeScript", slug: "typescript", color: "#3178C6" },
    { name: "Node.js", slug: "nodedotjs", color: "#339933" },
    { name: "Python", slug: "python", color: "#3776AB" },
    { name: "PyTorch", slug: "pytorch", color: "#EE4C2C" },
    { name: "Three.js", slug: "threedotjs", color: "#FFFFFF" }, // Three.js is white, handles well in dark mode
    { name: "TailwindCSS", slug: "tailwindcss", color: "#06B6D4" },
    { name: "Next.js", slug: "nextdotjs", color: "#000000" }, // Special handling might be needed for dark mode if black
    { name: "Docker", slug: "docker", color: "#2496ED" },
    { name: "Kubernetes", slug: "kubernetes", color: "#326CE5" }
];

const SKILLS_ROW2: Skill[] = [
    { name: "ROS", slug: "ros", color: "#22314E" }, // ROS has dark logo, might need filter
    { name: "Gazebo", slug: "gazebo", color: "#F95700" },
    { name: "OpenCV", slug: "opencv", color: "#5C3EE8" },
    { name: "C++", slug: "cplusplus", color: "#00599C" },
    { name: "Linux", slug: "linux", color: "#FCC624" },
    { name: "Git", slug: "git", color: "#F05032" },
    { name: "AWS", slug: "amazonaws", color: "#232F3E" },
    { name: "TensorFlow", slug: "tensorflow", color: "#FF6F00" },
    { name: "Arduino", slug: "arduino", color: "#00979D" },
    { name: "Raspberry Pi", slug: "raspberrypi", color: "#A22846" }
];

// Utility to repeat items enough times
const repeatedItems = (items: Skill[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => items);

const SkillItem = ({ skill }: { skill: Skill }) => (
    <div
        className="group/skill relative flex items-center justify-center gap-3 p-4 rounded-3xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20 cursor-default aspect-square w-20 hover:w-auto hover:aspect-auto hover:px-6"
    >
        <img
            src={`https://cdn.simpleicons.org/${skill.slug}`}
            alt={skill.name}
            className="w-10 h-10 transition-all duration-300 opacity-70 group-hover/skill:opacity-100 grayscale group-hover/skill:grayscale-0 invert dark:invert-0 shrink-0"
            style={{
                // In dark mode, we usually want white icons. 
                // 'invert' helps if the icon is black by default. 
                // But simple-icons are colored. 
                // We start grayscale (which makes them gray).
                // On hover we remove grayscale to show brand color.
            }}
        />
        <span className="hidden group-hover/skill:inline-block text-white/70 text-sm font-light transition-colors duration-300 group-hover/skill:text-white group-hover/skill:font-medium whitespace-nowrap">
            {skill.name}
        </span>
    </div>
);

export default function SkillsMarquee() {
    return (
        <section className="relative py-4 w-full overflow-hidden group">

            {/* Content */}
            <div className="relative w-full px-0 text-center">
                <div className="mb-6">
                    <span className="inline-block px-6 py-1.5 text-sm font-medium tracking-wider uppercase rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-sm transition-colors group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                        ⚡ Skills
                    </span>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden relative w-full py-4">
                    {/* Row 1 */}
                    <div className="flex gap-4 whitespace-nowrap animate-scroll-left w-max group-hover:[animation-play-state:paused]">
                        {repeatedItems(SKILLS_ROW1, 4).map((skill, i) => (
                            <SkillItem key={`row1-${i}`} skill={skill} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex gap-4 whitespace-nowrap mt-4 animate-scroll-right w-max group-hover:[animation-play-state:paused]">
                        {repeatedItems(SKILLS_ROW2, 4).map((skill, i) => (
                            <SkillItem key={`row2-${i}`} skill={skill} />
                        ))}
                    </div>

                    {/* Fade overlays */}
                    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10" />
                    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10" />
                </div>
            </div>
        </section>
    );
}
