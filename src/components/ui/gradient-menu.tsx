import React from 'react';
import { Download, Github, Linkedin, GraduationCap } from 'lucide-react';

const menuItems = [
    {
        title: 'Resume',
        icon: <Download size={24} />,
        gradientFrom: '#FF9966',
        gradientTo: '#FF5E62',
        href: '/assets/cv.pdf',
        download: true
    },
    {
        title: 'GitHub',
        icon: <Github size={24} />,
        gradientFrom: '#a955ff',
        gradientTo: '#ea51ff',
        href: 'https://github.com/yourname',
        external: true
    },
    {
        title: 'LinkedIn',
        icon: <Linkedin size={24} />,
        gradientFrom: '#56CCF2',
        gradientTo: '#2F80ED',
        href: 'https://linkedin.com/in/yourname',
        external: true
    },
    {
        title: 'Scholar',
        icon: <GraduationCap size={24} />,
        gradientFrom: '#80FF72',
        gradientTo: '#7EE8FA',
        href: 'https://scholar.google.com/citations?user=XXXXX',
        external: true
    }
];

export default function GradientMenu() {
    return (
        <div className="flex items-center justify-start py-4">
            <ul className="flex gap-4 sm:gap-6">
                {menuItems.map(({ title, icon, gradientFrom, gradientTo, href, external, download }, idx) => (
                    <a
                        key={idx}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        download={download}
                        style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
                        className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-white/5 border border-white/10 shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[140px] sm:hover:w-[160px] hover:shadow-none group cursor-pointer overflow-hidden"
                    >
                        {/* Gradient background on hover */}
                        <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>

                        {/* Blur glow */}
                        <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>

                        {/* Icon */}
                        <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0 text-white/80 group-hover:text-white">
                            {icon}
                        </span>

                        {/* Title */}
                        <span className="absolute text-white font-semibold uppercase tracking-wide text-xs sm:text-sm transition-all duration-500 scale-0 group-hover:scale-100 delay-75 whitespace-nowrap">
                            {title}
                        </span>
                    </a>
                ))}
            </ul>
        </div>
    );
}
