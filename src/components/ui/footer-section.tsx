"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, Github, Twitter } from "lucide-react";
import { PROFILE } from "@/data/profile";

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

import { CONTACT, SOCIALS } from "@/data/contact";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="md:rounded-t-3xl relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-2xl border-t border-transparent px-6 py-12 lg:py-16 mt-20">
            <div className="bg-[var(--accent-primary)]/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px]" />

            <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
                <AnimatedContainer className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-black font-bold">
                            {PROFILE.name[0]}
                        </div>
                        <span className="text-lg font-bold tracking-tight text-[var(--text-primary)]">{PROFILE.name}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] mt-8 text-sm md:mt-0 font-light max-w-xs">
                        {PROFILE.summary}
                        <br /><br />
                        © {new Date().getFullYear()} {PROFILE.name}. <br />
                        Built with React, Tailwind, and Motion.
                    </p>
                </AnimatedContainer>

                <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">

                    {/* Section 1: Portfolio */}
                    <AnimatedContainer delay={0.2}>
                        <div className="mb-10 md:mb-0">
                            <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider uppercase mb-4">Portfolio</h3>
                            <ul className="text-[var(--text-secondary)] space-y-3 text-sm">
                                {[
                                    { name: "Home", href: "#home" },
                                    { name: "Projects", href: "#projects" },
                                    { name: "Papers & Patents", href: "#papers-patents" },
                                    { name: "Experience & Achievements", href: "#experience" },
                                    { name: "Contact", href: "#contact" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="hover:text-[var(--accent-primary)] transition-colors duration-300 block py-1">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedContainer>

                    {/* Section 2: Contact */}
                    <AnimatedContainer delay={0.3}>
                        <div className="mb-10 md:mb-0">
                            <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider uppercase mb-4">Contact</h3>
                            <ul className="text-[var(--text-secondary)] space-y-4 text-sm">
                                <li>
                                    <a
                                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 hover:text-[var(--accent-primary)] transition-colors duration-300"
                                    >
                                        <Mail className="size-4 group-hover:text-[var(--accent-primary)] text-[var(--accent-secondary)]" />
                                        <span className="truncate max-w-[180px]">{CONTACT.email}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={`tel:${CONTACT.phone}`} className="group flex items-center gap-3 hover:text-[var(--accent-primary)] transition-colors duration-300">
                                        <Phone className="size-4 group-hover:text-[var(--accent-primary)] text-[var(--accent-secondary)]" />
                                        <span>{CONTACT.phone}</span>
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="size-4 mt-1 text-[var(--accent-secondary)] shrink-0" />
                                    <span className="leading-tight">{CONTACT.location}</span>
                                </li>
                            </ul>
                        </div>
                    </AnimatedContainer>

                    {/* Section 3: Media */}
                    <AnimatedContainer delay={0.4}>
                        <div className="mb-10 md:mb-0">
                            <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider uppercase mb-4">Media</h3>
                            <ul className="text-[var(--text-secondary)] space-y-3 text-sm">
                                {SOCIALS.map((social) => (
                                    <li key={social.name}>
                                        <a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-3 hover:text-[var(--accent-primary)] transition-all duration-300"
                                        >
                                            <social.icon className="size-4 group-hover:scale-110 transition-transform duration-300 text-[var(--accent-secondary)]/80 group-hover:text-[var(--accent-primary)]" />
                                            {social.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedContainer>

                </div>
            </div>
        </footer>
    );
};

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>["className"];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
