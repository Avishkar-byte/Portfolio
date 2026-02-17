"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface AnimatedTabsProps {
    tabs: Tab[];
    activeTabId?: string;
    onTabChange?: (id: string) => void;
    className?: string;
}

export const AnimatedTabs = ({
    tabs,
    activeTabId,
    onTabChange,
    className,
}: AnimatedTabsProps) => {
    const [internalActiveTab, setInternalActiveTab] = useState<string>(
        activeTabId || tabs[0]?.id
    );

    const activeTab = activeTabId !== undefined ? activeTabId : internalActiveTab;

    const handleTabClick = (id: string) => {
        setInternalActiveTab(id);
        onTabChange?.(id);
    };

    const navRef = useRef<HTMLDivElement>(null);

    // Auto-scroll nav to active tab
    useEffect(() => {
        if (navRef.current && activeTab) {
            const activeBtn = navRef.current.querySelector(`[data-tab-id="${activeTab}"]`);
            if (activeBtn) {
                activeBtn.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                });
            }
        }
    }, [activeTab]);

    if (!tabs?.length) return null;

    return (
        <div className={cn("w-full h-full flex flex-col gap-y-4", className)}>
            {/* Navigation Panel - Explicit Height & Styling */}
            <div
                ref={navRef}
                className="flex gap-2 bg-[#111111] border border-white/10 p-1.5 rounded-full overflow-x-auto no-scrollbar snap-x mx-auto max-w-full z-[60] shadow-2xl shrink-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        data-tab-id={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium rounded-full outline-none transition-colors whitespace-nowrap snap-center shrink-0",
                            activeTab === tab.id ? "text-white" : "text-white/50 hover:text-white"
                        )}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="active-tab"
                                className="absolute inset-0 bg-white/10 rounded-full"
                                transition={{ type: "spring", duration: 0.5 }}
                            />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Content Area - Flex Grow to fill space without overflow */}
            <div className="flex-1 w-full bg-[#111111]/80 shadow-2xl text-white backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden relative min-h-0">
                <AnimatePresence mode="wait">
                    {tabs.map((tab) => (
                        activeTab === tab.id && (
                            <motion.div
                                key={tab.id}
                                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                {tab.content}
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
