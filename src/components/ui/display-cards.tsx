"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { ProjectData, ProjectCard } from "@/components/ui/project-card";

interface DisplayCardsProps {
    cards: ProjectData[];
    onProjectClick?: (project: ProjectData) => void;
}

export default function DisplayCards({ cards, onProjectClick }: DisplayCardsProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Define the stacking classes for up to 3 cards
    const stackClasses = [
        {
            // Front (Index 0)
            className: "[grid-area:stack] hover:-translate-y-10 z-30",
        },
        {
            // Middle (Index 1)
            className: "[grid-area:stack] translate-x-12 translate-y-6 hover:-translate-y-1 z-20",
        },
        {
            // Back (Index 2)
            className: "[grid-area:stack] translate-x-24 translate-y-12 hover:translate-y-2 z-10",
        },
    ];

    // We only display up to 3 cards for this animation to work best
    const displayCards = cards.slice(0, 3);

    return (
        <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 w-full min-h-[500px]">
            {displayCards.map((project, index) => {
                // Determine which visual position (style) this card should take
                let styleIndex = index;

                if (hoveredIndex !== null) {
                    if (index === hoveredIndex) {
                        // usage: Hovered card goes to Front (0)
                        styleIndex = 0;
                    } else if (index === 0) {
                        // usage: Front card goes to Hovered card's position
                        styleIndex = hoveredIndex;
                    }
                    // Others stay in their place
                }

                // Cycle through stack classes if more than 3 (though we sliced)
                const stackClass = stackClasses[styleIndex % stackClasses.length];

                return (
                    <div
                        key={project.title}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={cn(
                            "transition-all duration-700 ease-out transform",
                            stackClass.className,
                            // Size adjustments:
                            "w-full max-w-sm md:max-w-md h-[450px]"
                        )}
                        style={{
                            zIndex: styleIndex === 0 ? 50 : undefined // Ensure front is always on top logic
                        }}
                    >
                        <ProjectCard
                            project={project}
                            className="h-full w-full shadow-2xl"
                            onClick={() => onProjectClick?.(project)}
                        />
                    </div>
                );
            })}
        </div>
    );
}
