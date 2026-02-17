"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectData } from "@/types";

interface ProjectCardProps {
    project: ProjectData;
    className?: string;
    onClick?: () => void;
}

import { GlowingEffect } from "@/components/ui/glowing-effect";

export function ProjectCard({ project, className, onClick }: ProjectCardProps) {
    return (
        <motion.div
            onClick={onClick}
            className={cn(
                "group relative z-0 flex flex-col h-full rounded-lg border-[0.75px] border-[var(--glass-border)] bg-transparent transition-all hover:shadow-xl cursor-pointer shadow-[0_0_15px_-3px_var(--accent-glow)]/30",
                className
            )}
            whileHover={{ y: -5 }}
        >
            {/* Glow Effect Layer */}
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64} // Increased proximity for better detection
                inactiveZone={0.01}
                borderWidth={3} // Thicker glow line
                variant="default"
            />

            {/* Inner Content Container - Clips the image zoom, provides background */}
            <div className="relative z-10 flex flex-col h-full rounded-[inherit] bg-[var(--card)] backdrop-blur-xl overflow-hidden">
                {/* Image / Preview */}
                <div className="relative h-44 w-full overflow-hidden">
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />

                    {/* Float Role/Year */}
                    <div className="absolute top-2 right-2 flex gap-2">
                        <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-[var(--text-primary)] bg-black/60 backdrop-blur-md rounded-md border border-[var(--glass-border)]">
                            {project.year}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-3 py-3 gap-2">
                    <div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent-primary)] transition-colors">
                            {project.title}
                        </h3>

                    </div>

                    <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                        {project.oneLiner}
                    </p>

                    {/* Tech Stack (limit to 3) */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                        {project.techStack.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2 py-0.5 text-[10px] text-[var(--text-secondary)] bg-[var(--glass-bg)] rounded-full border border-[var(--glass-border)]">
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="px-2 py-0.5 text-[10px] text-[var(--text-secondary)]/70">
                                +{project.techStack.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-3 border-t border-[var(--glass-border)] mt-1">
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                                title="GitHub Repo"
                            >
                                <Github size={16} />
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                                title="Live Demo"
                            >
                                <ExternalLink size={16} />
                            </a>
                        )}

                    </div>
                </div>
            </div>
        </motion.div>
    );
}
