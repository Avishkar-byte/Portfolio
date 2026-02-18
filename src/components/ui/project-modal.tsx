"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, FileText, Youtube } from "lucide-react";
import { ProjectData } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ProjectModalProps {
    project: ProjectData | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    // Reset slide index when modal opens
    React.useEffect(() => {
        if (isOpen) setCurrentImageIndex(0);
    }, [isOpen, project]);

    // Auto-advance slideshow
    React.useEffect(() => {
        if (!isOpen || !project || project.images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isOpen, project, currentImageIndex]);
    // Prevent scrolling when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] shadow-2xl pointer-events-auto scrollbar-hide"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-colors border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col md:flex-row">
                                {/* Image Section - Slideshow */}
                                <div className="w-full md:w-1/2 h-64 md:h-auto relative group">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentImageIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0 w-full h-full"
                                        >
                                            {/* Blurred Background */}
                                            <div className="absolute inset-0 overflow-hidden">
                                                <img
                                                    src={project.images[currentImageIndex]}
                                                    alt=""
                                                    className="w-full h-full object-cover blur-xl scale-110 opacity-60"
                                                />
                                            </div>
                                            {/* Foreground Image with Edge Blend */}
                                            <img
                                                src={project.images[currentImageIndex]}
                                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                                className="absolute inset-0 w-full h-full object-contain z-10 p-2 drop-shadow-xl"
                                                style={{
                                                    maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
                                                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)'
                                                }}
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Vignette Overlay */}
                                    <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:bg-gradient-to-r pointer-events-none z-20" />

                                    {/* Slide Indicators */}
                                    {project.images.length > 1 && (
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                                            {project.images.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                                                    className={cn(
                                                        "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                                        i === currentImageIndex
                                                            ? "bg-[var(--accent-primary)] w-4"
                                                            : "bg-white/50 hover:bg-white"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col gap-6">
                                    {/* Badges (Mobile/Desktop) */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.badges.map((badge, i) => (
                                            <span key={i} className="px-2.5 py-1 text-xs font-medium text-white bg-white/5 rounded-md border border-white/10">
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 leading-tight">{project.title}</h2>
                                        <div className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                                            <span>{project.year}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Summary */}
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-semibold text-[var(--accent-secondary)] uppercase tracking-wider">Summary</h3>
                                            <p className="text-[var(--text-primary)]/90 leading-relaxed text-base">
                                                {project.description || project.oneLiner}
                                            </p>
                                        </div>

                                        {/* Key Contributions */}
                                        {project.keyContributions && (
                                            <div className="space-y-2">
                                                <h3 className="text-sm font-semibold text-[var(--accent-secondary)] uppercase tracking-wider">Key Contributions</h3>
                                                <ul className="space-y-2 text-[var(--text-secondary)]">
                                                    {project.keyContributions.map((item, i) => (
                                                        <li key={i} className="flex gap-2 text-sm leading-relaxed">
                                                            <span className="text-[var(--accent-primary)] mt-1">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Technical Approach */}
                                        {project.technicalApproach && (
                                            <div className="space-y-2">
                                                <h3 className="text-sm font-semibold text-[var(--accent-secondary)] uppercase tracking-wider">Technical Approach</h3>
                                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                                    {project.technicalApproach}
                                                </p>
                                            </div>
                                        )}

                                        {/* Metrics */}
                                        {project.metrics && (
                                            <div className="space-y-2">
                                                <h3 className="text-sm font-semibold text-[var(--accent-secondary)] uppercase tracking-wider">Metrics & Impact</h3>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {project.metrics.map((metric, i) => (
                                                        <div key={i} className="flex items-center gap-2 text-[var(--text-primary)] bg-white/5 px-3 py-2 rounded-lg border border-white/5 text-sm">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] flex-shrink-0" />
                                                            {metric}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-2">
                                        <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs text-white/70 bg-white/5 rounded-full border border-white/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    {/* Actions */}
                                    {(project.youtube || project.repo || project.website) && (
                                        <div className="flex flex-wrap gap-3 mt-auto pt-4 md:pt-0">
                                            {project.youtube && (
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    className="gap-2 border transition-colors bg-white/5 border-white/10 hover:bg-white/10 text-white"
                                                >
                                                    <a
                                                        href={project.youtube}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Youtube size={16} />
                                                        Video
                                                    </a>
                                                </Button>
                                            )}

                                            {project.repo && (
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    className="gap-2 border transition-colors bg-white/5 border-white/10 hover:bg-white/10 text-white"
                                                >
                                                    <a
                                                        href={project.repo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Github size={16} />
                                                        GitHub
                                                    </a>
                                                </Button>
                                            )}

                                            {project.website && (
                                                <Button
                                                    asChild
                                                    className="gap-2 border-none transition-colors bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-[var(--bg-main)]"
                                                >
                                                    <a
                                                        href={project.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink size={16} />
                                                        {project.websiteLabel || "Web"}
                                                    </a>
                                                </Button>
                                            )}

                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
