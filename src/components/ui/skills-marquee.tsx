"use client";

import React from "react";
import {
    Cpu, Brain, BrainCircuit, Eye, Network, Camera, Map, Layers, Navigation,
    Route, Clock, Maximize2, Database, Copy, Scan, Compass, Waves, Satellite,
    Cable, Settings, Box, Zap, Layout, FileText, Scroll, Award, Users,
    Coffee, Palette
} from "lucide-react";

interface Skill {
    name: string;
    slug?: string; // SimpleIcons slug
    icon?: React.ElementType; // Lucide icon fallback
    color: string; // Brand color for hover effect
}

const SKILLS_ROW1: Skill[] = [
    { name: "Edge AI", icon: Cpu, color: "#10B981" },
    { name: "Artificial Intelligence", icon: Brain, color: "#8B5CF6" },
    { name: "Machine Learning", icon: BrainCircuit, color: "#F59E0B" },
    { name: "Computer Vision", icon: Eye, color: "#3B82F6" },
    { name: "Deep Learning", icon: Network, color: "#EF4444" },
    { name: "Visual-Inertial Odometry", icon: Camera, color: "#EC4899" },
    { name: "SLAM", icon: Map, color: "#6366F1" },
    { name: "Sensor Fusion", icon: Layers, color: "#14B8A6" },
    { name: "Autonomous Navigation", icon: Navigation, color: "#F97316" },
    { name: "Motion Planning", icon: Route, color: "#A855F7" },
    { name: "Embedded Systems", icon: Cpu, color: "#22C55E" },
    { name: "Real-Time Systems", icon: Clock, color: "#EAB308" },
    { name: "Quantization", icon: Maximize2, color: "#06B6D4" },
    { name: "Dataset Collection", icon: Database, color: "#64748B" },
    { name: "Data Augmentation", icon: Copy, color: "#8B5CF6" },
    { name: "System Arch.", icon: Layout, color: "#6366F1" },
    { name: "Product Dev", icon: Layers, color: "#EC4899" },
    { name: "Documentation", icon: FileText, color: "#3B82F6" },
    { name: "Research Papers", icon: Scroll, color: "#8B5CF6" },
    { name: "Patents", icon: Award, color: "#EAB308" },
    { name: "Leadership", icon: Users, color: "#22C55E" },
    { name: "Edge Deployment", icon: Box, color: "#10B981" },
    { name: "Low-Latency Inference", icon: Zap, color: "#F59E0B" }
];

const SKILLS_ROW2: Skill[] = [
    { name: "YOLO", icon: Eye, color: "#00FFFF" },
    { name: "OpenCV", slug: "opencv", color: "#5C3EE8" },
    { name: "PyTorch", slug: "pytorch", color: "#EE4C2C" },
    { name: "TensorFlow", slug: "tensorflow", color: "#FF6F00" },
    { name: "VINS-Fusion", icon: Layers, color: "#3B82F6" },
    { name: "LibRealSense", slug: "intel", color: "#0068B5" },
    { name: "ROS / ROS2", slug: "ros", color: "#22314E" },
    { name: "Raspberry Pi", slug: "raspberrypi", color: "#A22846" },
    { name: "NVIDIA Jetson Nano", slug: "nvidia", color: "#76B900" },
    { name: "ESP32", slug: "espressif", color: "#E7352C" },
    { name: "Arduino", slug: "arduino", color: "#00979D" },
    { name: "Intel RealSense D455", slug: "intel", color: "#0068B5" },
    { name: "2D LiDAR", icon: Scan, color: "#F43F5E" },
    { name: "IMU", icon: Compass, color: "#8B5CF6" },
    { name: "Ultrasonic Sensors", icon: Waves, color: "#0EA5E9" },
    { name: "GPS Modules", icon: Satellite, color: "#EAB308" },
    { name: "Python", slug: "python", color: "#3776AB" },
    { name: "C / C++", slug: "cplusplus", color: "#00599C" },
    { name: "TypeScript", slug: "typescript", color: "#3178C6" },
    { name: "React", slug: "react", color: "#61DAFB" },
    { name: "CSS", icon: Palette, color: "#1572B6" },
    { name: "Java", icon: Coffee, color: "#007396" },
    { name: "Flask", slug: "flask", color: "#FFFFFF" },
    { name: "SQL", icon: Database, color: "#4479A1" },
    { name: "Serial Comm.", icon: Cable, color: "#F59E0B" },
    { name: "HW/SW Integration", icon: Settings, color: "#64748B" }
];

// Utility to repeat items enough times
const repeatedItems = (items: Skill[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => items);

const SkillItem = ({ skill }: { skill: Skill }) => {
    const IconComponent = skill.icon;

    return (
        <div
            className="group/skill relative flex items-center justify-center gap-3 p-4 rounded-3xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20 cursor-default aspect-square w-20 hover:w-auto hover:aspect-auto hover:px-6"
        >
            {skill.slug ? (
                <img
                    src={`https://cdn.simpleicons.org/${skill.slug}`}
                    alt={skill.name}
                    className="w-10 h-10 transition-all duration-300 opacity-70 group-hover/skill:opacity-100 grayscale group-hover/skill:grayscale-0 invert dark:invert-0 shrink-0"
                />
            ) : IconComponent ? (
                <IconComponent
                    className="w-10 h-10 transition-all duration-300 opacity-70 group-hover/skill:opacity-100 text-white group-hover/skill:text-[var(--hover-color)] shrink-0"
                    style={{ '--hover-color': skill.color } as React.CSSProperties}
                />
            ) : null}

            <span className="hidden group-hover/skill:inline-block text-white/70 text-sm font-light transition-colors duration-300 group-hover/skill:text-white group-hover/skill:font-medium whitespace-nowrap">
                {skill.name}
            </span>
        </div>
    );
};

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
                <div className="overflow-hidden relative w-full py-4 space-y-4">
                    {/* Row 1 */}
                    <div className="flex gap-4 whitespace-nowrap animate-scroll-left w-max group-hover:[animation-play-state:paused]">
                        {repeatedItems(SKILLS_ROW1, 4).map((skill, i) => (
                            <SkillItem key={`row1-${i}`} skill={skill} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex gap-4 whitespace-nowrap animate-scroll-right w-max group-hover:[animation-play-state:paused]">
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
