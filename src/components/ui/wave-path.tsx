"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";

type WWavePathProps = React.ComponentProps<"div">;

export function WavePath({ className, ...props }: WWavePathProps) {
    const path = useRef<SVGPathElement>(null);
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId: number | null = null;

    useEffect(() => {
        setPath(progress);
    }, []);

    const setPath = (progress: number) => {
        const width = window.innerWidth * 0.7; // Width matches the container width in usage
        if (path.current) {
            path.current.setAttributeNS(
                null,
                "d",
                `M0 50 Q${width * x} ${50 + progress}, ${width} 50`
            );
        }
    };

    const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

    const manageMouseEnter = () => {
        if (reqId) {
            cancelAnimationFrame(reqId);
            resetAnimation();
        }
    };

    const manageMouseMove = (e: React.MouseEvent) => {
        const { movementY, clientX } = e;
        if (path.current) {
            const pathBound = path.current.getBoundingClientRect();
            x = (clientX - pathBound.left) / pathBound.width;
            progress += movementY;
            setPath(progress);
        }
    };

    const manageMouseLeave = () => {
        animateOut();
    };

    const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        progress = lerp(progress, 0, 0.025);
        time += 0.2;
        setPath(newProgress);
        if (Math.abs(progress) > 0.75) {
            reqId = requestAnimationFrame(animateOut);
        } else {
            resetAnimation();
        }
    };

    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    };

    return (
        <div className={cn("relative h-20 w-full max-w-7xl mx-auto", className)} {...props}>
            <div
                onMouseEnter={manageMouseEnter}
                onMouseMove={manageMouseMove}
                onMouseLeave={manageMouseLeave}
                className="relative z-10 h-full w-full hover:cursor-crosshair"
            />
            <svg className="absolute top-0 h-full w-full pointer-events-none">
                <path
                    ref={path}
                    className="fill-none stroke-[var(--accent-primary)]"
                    strokeWidth={1}
                />
            </svg>
        </div>
    );
}
