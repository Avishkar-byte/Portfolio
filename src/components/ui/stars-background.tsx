"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface StarProps {
    x: number;
    y: number;
    size: number;
    opacity: number;
    twinkleSpeed: number;
}

export const StarsBackground = ({
    starDensity = 0.00015,
    allStarsTwinkle = true,
    twinkleProbability = 0.7,
    minTwinkleSpeed = 0.5,
    maxTwinkleSpeed = 1,
    className,
}: {
    starDensity?: number;
    allStarsTwinkle?: boolean;
    twinkleProbability?: number;
    minTwinkleSpeed?: number;
    maxTwinkleSpeed?: number;
    className?: string;
}) => {
    const [stars, setStars] = useState<StarProps[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const updateStars = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const { width, height } = canvas.getBoundingClientRect();
                canvas.width = width;
                canvas.height = height;

                const starCount = Math.floor(width * height * starDensity);
                const newStars = new Array(starCount).fill(0).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.5 + 0.5, // Random size between 0.5 and 2
                    opacity: Math.random(),
                    twinkleSpeed: Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) + minTwinkleSpeed,
                }));

                setStars(newStars);
            }
        };

        updateStars();
        window.addEventListener("resize", updateStars);

        return () => {
            window.removeEventListener("resize", updateStars);
        };
    }, [starDensity, maxTwinkleSpeed, minTwinkleSpeed]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            const { width, height } = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

                // Twinkle effect
                const opacity = allStarsTwinkle && Math.random() < twinkleProbability
                    ? Math.abs(Math.sin(Date.now() * 0.001 * star.twinkleSpeed)) * star.opacity
                    : star.opacity;

                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [stars, allStarsTwinkle, twinkleProbability]);

    return (
        <div
            className={cn("fixed inset-0 z-[-1] pointer-events-none bg-black", className)}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
};
