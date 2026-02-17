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

                    {/* Image Placeholder */}
                    <div className="h-[250px] md:h-[300px] w-full bg-neutral-900/50 flex flex-col items-center justify-center text-neutral-500 border-b border-white/5">
                        <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                        <span className="font-mono text-sm uppercase tracking-wider">Image Placeholder</span>
                    </div>

                    {/* Content Body */}
                    <div className="p-8 md:p-10 space-y-8">

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

                        {/* Placeholder for Bullets/More Details */}
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
                            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">Key Highlights</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3 text-neutral-300">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                                    <span>Led cross-functional teams to deliver key project milestones ahead of schedule.</span>
                                </li>
                                <li className="flex items-start gap-3 text-neutral-300">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                                    <span>Implemented scalable architecture reducing system latency by 40%.</span>
                                </li>
                            </ul>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}
