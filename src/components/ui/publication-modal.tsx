"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileText, Calendar, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { PublicationData } from "@/types";

interface PublicationModalProps {
    publication: PublicationData | null;
    isOpen: boolean;
    onClose: () => void;
}

export function PublicationModal({ publication, isOpen, onClose }: PublicationModalProps) {
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
            {isOpen && publication && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl pointer-events-auto"
                        >
                            {/* Header Gradient */}
                            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--accent-primary)]/10 to-transparent pointer-events-none" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-colors border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            {/* Content Scrollable Area */}
                            <div className="overflow-y-auto p-6 md:p-10 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

                                {/* Header Info */}
                                <div className="mb-8 relative z-10">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {publication.tags.map((tag, i) => (
                                            <span key={i} className="px-2.5 py-1 text-xs font-medium text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 rounded-full border border-[var(--accent-primary)]/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                        {publication.title}
                                    </h2>

                                    <div className="flex flex-wrap items-center gap-4 text-[var(--text-secondary)] text-sm">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            <span>{publication.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <BookOpen size={14} />
                                            <span>{publication.publisher}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-white/10 mb-8" />

                                {/* Main Content */}
                                <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                                    <p className="font-light">
                                        {publication.abstract}
                                    </p>

                                    <div className="bg-[var(--glass-bg)] p-6 rounded-xl border border-[var(--glass-border)]">
                                        <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-3">Extended Description</h3>
                                        <p className="text-base text-[var(--text-secondary)]">
                                            {publication.fullText}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer Actions */}
                                <div className="flex gap-4 mt-10">
                                    {publication.link && (
                                        <Button
                                            asChild
                                            className="bg-white text-black hover:bg-white/90 gap-2"
                                        >
                                            <a href={publication.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={16} />
                                                View Source
                                            </a>
                                        </Button>
                                    )}
                                    {publication.pdf && (
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="border-white/20 text-white hover:bg-white/10 gap-2"
                                        >
                                            <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                                                <FileText size={16} />
                                                Download PDF
                                            </a>
                                        </Button>
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
