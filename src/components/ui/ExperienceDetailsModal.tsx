"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExperienceData } from "@/types";

interface ExperienceDetailsModalProps {
    item: ExperienceData | null;
    onClose: () => void;
}

export default function ExperienceDetailsModal({ item, onClose }: ExperienceDetailsModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (item) {
            window.addEventListener("keydown", handleKeyDown);
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [item, onClose]);

    if (!item) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="relative w-full max-w-4xl bg-neutral-950/30 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white/10 text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto custom-scrollbar">

                    {/* Cinematic Image Section */}
                    <div className="h-[200px] md:h-[300px] w-full bg-neutral-900/50 relative overflow-hidden flex items-center justify-center border-b border-white/5 group">
                        {item.image ? (
                            <>
                                {/* Blurred Background */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover blur-xl scale-110 opacity-60"
                                    />
                                </div>
                                {/* Foreground Image with Edge Blend */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-contain z-10 p-4 drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
                                    }}
                                />
                                {/* Vignette Overlay */}
                                <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-neutral-500">
                                <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                                <span className="font-mono text-sm uppercase tracking-wider">Image Placeholder</span>
                            </div>
                        )}
                        {/* Bottom Gradient for Text Contrast */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />
                    </div>

                    {/* Content Body */}
                    <div className="p-5 md:p-10 space-y-6 md:space-y-8">

                        {/* Header */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-sky-400 font-mono text-sm font-semibold tracking-wider">
                                    {item.title}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-neutral-600" />
                                <span className="text-neutral-400 font-mono text-sm">
                                    {item.company}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                {item.role}
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="prose prose-invert max-w-none">
                            <p className="text-neutral-300 text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* Badges / Skills */}
                        {item.skills && item.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Key Highlights */}
                        {item.achievements && item.achievements.length > 0 && (
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
                                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">Key Highlights</h3>
                                <ul className="space-y-2">
                                    {item.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-300">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>


                </div>
            </div>
        </div>
    );
}
