"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ProjectData } from "@/types";
import { cn } from "@/lib/utils";
import { ProjectModal } from "@/components/ui/project-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Youtube, Globe, Link as LinkIcon, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface CinematicProjectsProps {
    projects: ProjectData[];
}

// ─── Mobile Card Slideshow ───────────────────────────────────────────────────
const MobileCardSlideshow = ({ images, title }: { images: string[]; title: string }) => {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => setIdx((p) => (p + 1) % images.length), 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full aspect-[16/9] bg-black/50 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Blurred Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src={images[idx]}
                            alt=""
                            className="w-full h-full object-cover blur-2xl scale-110 opacity-60"
                        />
                    </div>
                    {/* Foreground Image with Edge Blend */}
                    <img
                        src={images[idx]}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-contain z-10 p-2 drop-shadow-2xl"
                        style={{
                            maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
                        }}
                    />
                    {/* Vignette */}
                    <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
                </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                i === idx
                                    ? "bg-[var(--accent-primary)] w-4"
                                    : "bg-white/50 w-1.5"
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// ─── Mobile Layout ───────────────────────────────────────────────────────────
const MobileProjects = ({ projects }: { projects: ProjectData[] }) => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    return (
        <div className="w-full px-4 py-12 space-y-6">
            {/* Section Title */}
            <div className="mb-4">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">Projects</h2>
                <p className="text-sm text-[var(--text-secondary)] mt-1 font-mono opacity-70">
                    {String(projects.length).padStart(2, '0')} works
                </p>
            </div>

            {projects.slice(0, 7).map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="w-full rounded-2xl overflow-hidden border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md shadow-lg"
                >
                    {/* Image Slideshow */}
                    <MobileCardSlideshow images={project.images} title={project.title} />

                    {/* Card Content */}
                    <div className="p-5 space-y-3">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] leading-tight">
                            {project.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {project.oneLiner}
                        </p>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.techStack.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-[var(--text-secondary)]"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 4 && (
                                <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-[var(--text-secondary)] opacity-60">
                                    +{project.techStack.length - 4}
                                </span>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-2">
                            <Button
                                onClick={() => setSelectedProject(project)}
                                className="button-primary"
                            >
                                Read more..
                            </Button>
                            <LinksPopup project={project} />
                        </div>
                    </div>
                </motion.div>
            ))}

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

// ─── Desktop Stepper Nav ─────────────────────────────────────────────────────
const DesktopStepperNav = ({
    projects,
    activeIndex,
    onSelect,
}: {
    projects: ProjectData[];
    activeIndex: number;
    onSelect: (i: number) => void;
}) => {
    const count = Math.min(projects.length, 7);
    // Height fraction for the active line
    const lineFraction = count > 1 ? activeIndex / (count - 1) : 0;

    return (
        <div className="w-72 h-full shrink-0 bg-black/40 backdrop-blur-md border-r border-[var(--glass-border)] flex flex-col z-20">
            {/* Header */}
            <div className="p-6 border-b border-[var(--glass-border)] flex items-end justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-1">Projects</h2>
                    <div className="text-sm font-mono text-[var(--text-secondary)] mt-2 flex items-center gap-1 opacity-70">
                        <span className="text-[var(--accent-primary)] font-bold text-lg">
                            {String(activeIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs text-white/20">/</span>
                        <span>{String(count).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>

            {/* Stepper */}
            <div className="flex-1 overflow-y-auto py-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style dangerouslySetInnerHTML={{
                    __html: `.stepper-scroll::-webkit-scrollbar { display: none; }`
                }} />
                <div className="relative stepper-scroll">
                    {/* Vertical Track Line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--glass-border)]">
                        {/* Active Portion */}
                        <motion.div
                            className="absolute left-0 top-0 w-full bg-gradient-to-b from-[var(--accent-primary)] to-transparent rounded-full"
                            animate={{ height: `${lineFraction * 100}%` }}
                            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col gap-1">
                        {projects.slice(0, 7).map((project, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => onSelect(index)}
                                    className={cn(
                                        "group relative flex items-center gap-3 pl-8 pr-3 py-3 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] transition-colors duration-200",
                                        isActive
                                            ? "bg-[var(--glass-bg)] border border-[var(--glass-border)]"
                                            : "border border-transparent hover:bg-[var(--glass-bg)] opacity-60 hover:opacity-100"
                                    )}
                                    aria-label={`View project ${project.title}`}
                                    aria-current={isActive ? 'true' : 'false'}
                                >
                                    {/* Dot / Active glow dot */}
                                    <div className="absolute left-[7px] top-1/2 -translate-y-1/2">
                                        {isActive ? (
                                            <motion.div
                                                layoutId="stepper-dot"
                                                className="w-[10px] h-[10px] rounded-full bg-[var(--accent-primary)] shadow-[0_0_10px_var(--accent-primary),0_0_20px_var(--accent-glow)]"
                                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                            />
                                        ) : (
                                            <div className="w-[10px] h-[10px] rounded-full border-2 border-[var(--glass-border)] bg-black/60 group-hover:border-[var(--accent-primary)]/40 transition-colors" />
                                        )}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <span className={cn(
                                            "block font-mono text-[10px] uppercase tracking-widest mb-0.5",
                                            isActive ? "text-[var(--accent-primary)]" : "text-[var(--text-secondary)]/50"
                                        )}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className={cn(
                                            "block text-sm font-medium truncate",
                                            isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                                        )}>
                                            {project.title}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── Desktop Stage ───────────────────────────────────────────────────────────
const DesktopStage = ({
    project,
    activeIndex,
    onOpenModal,
}: {
    project: ProjectData;
    activeIndex: number;
    onOpenModal: (p: ProjectData) => void;
}) => {
    // Per-project slideshow
    const [imgIdx, setImgIdx] = useState(0);

    useEffect(() => {
        setImgIdx(0);
    }, [activeIndex]);

    useEffect(() => {
        if (project.images.length <= 1) return;
        const interval = setInterval(() => setImgIdx((p) => (p + 1) % project.images.length), 4000);
        return () => clearInterval(interval);
    }, [activeIndex, project.images.length]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeIndex}
                initial={{ y: 60, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -30, opacity: 0, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center p-8 lg:p-16"
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 pointer-events-none" />

                <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image container */}
                    <div
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black/50 cursor-pointer group"
                        onClick={() => onOpenModal(project)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={imgIdx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                {/* Blurred Background */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <img
                                        src={project.images[imgIdx]}
                                        alt=""
                                        className="w-full h-full object-cover blur-2xl scale-110 opacity-60"
                                    />
                                </div>
                                {/* Foreground Image with Edge Blend */}
                                <img
                                    src={project.images[imgIdx]}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-contain z-10 p-2 drop-shadow-2xl"
                                    style={{
                                        maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
                                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
                                    }}
                                />
                                {/* Vignette */}
                                <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                            <span className="bg-black/70 backdrop-blur-sm text-[var(--text-primary)] px-4 py-2 rounded-full border border-[var(--glass-border)] text-sm font-medium">
                                View Details
                            </span>
                        </div>

                        {/* Slide Indicators */}
                        {project.images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                                {project.images.map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "h-1.5 rounded-full transition-all duration-300",
                                            i === imgIdx
                                                ? "bg-[var(--accent-primary)] w-4"
                                                : "bg-white/50 w-1.5"
                                        )}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Info panel */}
                    <div className="space-y-4">
                        <div>
                            <Badge variant="outline" className="border-[var(--accent-primary)]/30 text-[var(--accent-primary)] bg-[var(--accent-primary)]/5">
                                {project.year}
                            </Badge>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">
                            {project.title}
                        </h3>

                        <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-md">
                            {project.oneLiner}
                        </p>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {project.techStack.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-[var(--text-secondary)] hover:bg-white/15 hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] transition-all cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 4 && (
                                <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-[var(--text-secondary)] opacity-60">
                                    +{project.techStack.length - 4}
                                </span>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4 pt-4 border-t border-[var(--accent-primary)]/20">
                            <Button
                                onClick={() => onOpenModal(project)}
                                className="button-primary"
                            >
                                Read more..
                            </Button>
                            <LinksPopup project={project} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

// ─── LinksPopup ──────────────────────────────────────────────────────────────
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

// ─── Main Component ──────────────────────────────────────────────────────────
export const CinematicProjects = ({ projects }: CinematicProjectsProps) => {
    const isMobile = useIsMobile();
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const lastScrollTime = useRef(0);
    const scrollCooldown = 1200;

    // ── Desktop: Scroll lock ─────────────────────────────────────────────
    useEffect(() => {
        if (isMobile) return;

        const section = sectionRef.current;
        if (!section) return;

        const handleWheel = (e: WheelEvent) => {
            if (selectedProject) return;

            const rect = section.getBoundingClientRect();
            const isCovering = rect.top <= 1 && rect.bottom > 1;

            if (isCovering) {
                const now = Date.now();
                const direction = e.deltaY > 0 ? 1 : -1;

                if (direction === 1) {
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
                } else {
                    if (activeIndex > 0) {
                        e.preventDefault();
                        if (now - lastScrollTime.current > scrollCooldown) {
                            setActiveIndex((prev) => prev - 1);
                            lastScrollTime.current = now;
                        }
                    }
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [isMobile, activeIndex, projects.length, selectedProject]);

    // ── Desktop: Keyboard navigation ─────────────────────────────────────
    useEffect(() => {
        if (isMobile) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedProject) return;

            const section = sectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            if (Math.abs(rect.top) > window.innerHeight) return;

            if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                if (activeIndex < projects.length - 1) {
                    e.preventDefault();
                    setActiveIndex((prev) => prev + 1);
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                if (activeIndex > 0) {
                    e.preventDefault();
                    setActiveIndex((prev) => prev - 1);
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMobile, activeIndex, projects.length, selectedProject]);

    // ── Mobile: render vertical card stack ────────────────────────────────
    if (isMobile) {
        return <MobileProjects projects={projects} />;
    }

    // ── Desktop: render stepper + stage ──────────────────────────────────
    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen bg-transparent flex flex-row snap-start"
        >
            <DesktopStepperNav
                projects={projects}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
            />

            <div className="flex-1 min-h-0 relative overflow-hidden">
                <DesktopStage
                    project={projects[activeIndex]}
                    activeIndex={activeIndex}
                    onOpenModal={setSelectedProject}
                />
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};
