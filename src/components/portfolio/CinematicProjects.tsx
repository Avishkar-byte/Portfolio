"use client";

import React, { useRef, useState, useEffect } from "react";
import { ProjectData } from "@/types";
import { cn } from "@/lib/utils";
import { ProjectModal } from "@/components/ui/project-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Youtube, Globe, Link as LinkIcon, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicProjectsProps {
    projects: ProjectData[];
}

export const CinematicProjects = ({ projects }: CinematicProjectsProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const lastScrollTime = useRef(0);
    const scrollCooldown = 1200; // ms between scrolls

    // Slideshow State
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset slideshow when project changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [activeIndex]);

    // Auto-advance slideshow
    useEffect(() => {
        const project = projects[activeIndex];
        if (!project.images || project.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 4000); // 4 seconds per slide

        return () => clearInterval(interval);
    }, [activeIndex, projects]);

    // --- SCROLL LOCK LOGIC ---
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleWheel = (e: WheelEvent) => {
            if (selectedProject) return;

            const rect = section.getBoundingClientRect();
            const isCovering = rect.top <= 1 && rect.bottom > 1;

            if (isCovering) {
                const now = Date.now();
                const direction = e.deltaY > 0 ? 1 : -1;

                if (direction === 1) { // Scrolling DOWN
                    if (activeIndex < projects.length - 1) {
                        e.preventDefault();
                        if (now - lastScrollTime.current > scrollCooldown) {
                            setActiveIndex((prev) => prev + 1);
                            lastScrollTime.current = now;
                        }
                    } else if (rect.bottom <= window.innerHeight + 5) {
                        // Allow natural exit at bottom
                    } else {
                        if (activeIndex < projects.length - 1) e.preventDefault();
                    }
                } else { // Scrolling UP
                    if (activeIndex > 0) {
                        e.preventDefault();
                        if (now - lastScrollTime.current > scrollCooldown) {
                            setActiveIndex((prev) => prev - 1);
                            lastScrollTime.current = now;
                        }
                    } else if (rect.top >= -5) {
                        // Allow natural exit at top
                    } else {
                        // Drift protection
                    }
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        // Clean up
        return () => window.removeEventListener("wheel", handleWheel);
    }, [activeIndex, projects.length, selectedProject]);


    // --- KEYBOARD NAVIGATION ---
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedProject) return;

            const section = sectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            if (Math.abs(rect.top) > window.innerHeight) return;

            if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                if (activeIndex < projects.length - 1) {
                    e.preventDefault();
                    setActiveIndex(prev => prev + 1);
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                if (activeIndex > 0) {
                    e.preventDefault();
                    setActiveIndex(prev => prev - 1);
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, projects.length, selectedProject]);


    // --- NAV SYNC ---
    useEffect(() => {
        if (navRef.current) {
            const container = navRef.current.querySelector('div');
            if (container && container.children[activeIndex]) {
                const navItem = container.children[activeIndex] as HTMLElement;
                navItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeIndex]);


    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative w-full h-screen overflow-hidden bg-transparent flex flex-col md:flex-row snap-start"
        >
            {/* Pinned Navigation */}
            <div
                id="projects-pinned-nav"
                className="w-full md:w-80 md:h-full shrink-0 bg-black/40 backdrop-blur-md border-b md:border-b-0 border-r border-[var(--glass-border)] flex flex-col z-20"
                aria-hidden="false"
            >
                <div className="p-6 border-b border-[var(--glass-border)] flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-1">Projects</h2>
                        <div className="text-sm font-mono text-[var(--text-secondary)] mt-2 flex items-center gap-1 opacity-70">
                            <span className="text-[var(--accent-primary)] font-bold text-lg">{String(activeIndex + 1).padStart(2, '0')}</span>
                            <span className="text-xs text-white/20">/</span>
                            <span>{String(Math.min(projects.length, 7)).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>

                <div
                    className="flex-1 overflow-x-auto md:overflow-y-auto scroll-smooth no-scrollbar"
                    ref={navRef}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .no-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                    `}} />
                    <div className="flex md:flex-col p-4 gap-3 min-w-max md:min-w-0">
                        {projects.slice(0, 7).map((project, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    "group relative flex items-center gap-4 p-3 rounded-xl transition-all duration-300 w-64 md:w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]",
                                    activeIndex === index
                                        ? "active nav-item text-[var(--accent-primary)] bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-[0_6px_18px_var(--accent-glow)]"
                                        : "nav-item text-[var(--accent-secondary)] hover:bg-[var(--glass-bg)] border border-transparent hover:border-[var(--glass-border)] opacity-60 hover:opacity-100"
                                )}
                                aria-label={`View project ${project.title}`}
                                aria-current={activeIndex === index ? 'true' : 'false'}
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-lg overflow-hidden shrink-0 border transition-colors",
                                    activeIndex === index ? "border-[var(--accent-primary)]" : "border-[var(--glass-border)]"
                                )}>
                                    <img
                                        src={project.images[0]}
                                        alt=""
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className={cn(
                                        "font-medium text-sm truncate transition-colors",
                                        activeIndex === index ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                                    )}>
                                        {project.title}
                                    </h3>
                                </div>

                                {activeIndex === index && (
                                    <motion.div
                                        layoutId="active-indicator"
                                        className="absolute right-3 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)] hidden md:block"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stacked Project Stage */}
            <div className="projects-stage flex-1 h-full relative overflow-hidden">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={cn(
                            "project-slide absolute inset-0 w-full h-full p-6 md:p-12 lg:p-20 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                            activeIndex === index
                                ? "active opacity-100 translate-y-0 z-10 pointer-events-auto"
                                : "opacity-0 translate-y-10 z-0 pointer-events-none"
                        )}
                        aria-hidden={activeIndex !== index}
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 pointer-events-none" />

                        <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                            {/* Visual Side (Slideshow) */}
                            <div
                                className="order-2 lg:order-1 relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--glass-border)] shadow-2xl group cursor-pointer bg-black/50"
                                onClick={() => setSelectedProject(project)}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={project.images[currentImageIndex]}
                                        alt={project.title}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </AnimatePresence>

                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-black/70 backdrop-blur-sm text-[var(--text-primary)] px-4 py-2 rounded-full border border-[var(--glass-border)] text-sm font-medium">
                                        View Details
                                    </span>
                                </div>

                                {/* Slide Indicators */}
                                {project.images.length > 1 && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                        {project.images.map((_, i) => (
                                            <div
                                                key={i}
                                                className={cn(
                                                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                                    i === currentImageIndex
                                                        ? "bg-[var(--accent-primary)] w-4"
                                                        : "bg-white/50"
                                                )}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Content Side */}
                            <div className="order-1 lg:order-2 space-y-6">
                                <div>
                                    <Badge variant="outline" className="border-[var(--accent-primary)]/30 text-[var(--accent-primary)] bg-[var(--accent-primary)]/5">
                                        {project.year}
                                    </Badge>
                                </div>

                                <h3 className="project-title text-2xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
                                    {project.oneLiner}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.techStack.slice(0, 4).map(tech => (
                                        <Badge key={tech} variant="secondary" className="bg-[var(--glass-bg)] text-[var(--text-secondary)] hover:bg-[var(--glass-border)]">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.techStack.length > 4 && (
                                        <Badge variant="secondary" className="bg-[var(--glass-bg)] text-[var(--text-secondary)] opacity-50">
                                            +{project.techStack.length - 4}
                                        </Badge>
                                    )}
                                </div>

                                <div className="flex items-center gap-4 pt-4">
                                    <Button
                                        onClick={() => setSelectedProject(project)}
                                        className="button-primary"
                                    >
                                        Read more..
                                    </Button>

                                    <LinksPopup project={project} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

// Modular Links Popup Component
const LinksPopup = ({ project }: { project: ProjectData }) => {
    const [isOpen, setIsOpen] = useState(false);
    // User requested to show all options "for now" even if links aren't there yet
    const hasLinks = true;

    if (!hasLinks) return null;

    return (
        <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <Button
                variant="ghost"
                className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] hover:bg-[var(--glass-bg)] gap-2 group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <LinkIcon className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                Links
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-0 mb-3 w-40 p-2 rounded-xl border border-[var(--glass-border)] bg-black/60 backdrop-blur-xl shadow-xl flex flex-col gap-1 z-50"
                    >

                        {project.youtube && (
                            <a
                                href={project.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--accent-primary)]/10 transition-colors text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            >
                                <Youtube className="w-4 h-4 text-red-500" />
                                Video
                            </a>
                        )}


                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--accent-primary)]/10 transition-colors text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        )}


                        {project.website && (
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--accent-primary)]/10 transition-colors text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            >
                                <Globe className="w-4 h-4 text-blue-400" />
                                {project.websiteLabel || "Web"}
                            </a>
                        )}

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
