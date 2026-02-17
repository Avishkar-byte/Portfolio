import { cn } from "@/lib/utils";
import React from "react";

export const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-white/10 border-neutral-200",
                (index === 0 || index === 4 || index === 8) && "lg:border-l dark:border-white/10 border-neutral-200", // Adjusted for 4 columns logic if needed, or specific to usage
                index < 8 && "lg:border-b dark:border-white/10 border-neutral-200"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[var(--glass-bg)] to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[var(--glass-bg)] to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-[var(--text-secondary)]">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[var(--accent-primary)] transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[var(--text-primary)]">
                    {title}
                </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
