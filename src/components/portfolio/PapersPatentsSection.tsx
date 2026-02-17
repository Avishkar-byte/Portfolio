"use client";

import React from "react";
import BackToTop from "./BackToTop";
import { PATENTS } from "@/data/patents";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BookOpen, FileText, Share2, Droplet, Eye, Car, Sliders, Cpu, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.FC<any>> = {
  BookOpen, FileText, Share2, Droplet, Eye, SteeringWheel: Car, Sliders, Cpu, Layers
};

function PatentBadge({ category }: { category: string }) {
  const map = {
    publication: { text: "Publicaton", color: "bg-sky-400" },
    utility: { text: "Utility Patent", color: "bg-amber-400" },
    design: { text: "Design Patent", color: "bg-emerald-400" },
  } as const;

  const info = (map as any)[category] ?? map.utility;

  return (
    <div className="flex items-center gap-2">
      <div className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]", info.color)} />
      <span className="text-xs font-semibold text-[var(--text-secondary)] tracking-wide uppercase">{info.text}</span>
    </div>
  );
}

export default function PapersPatentsSection() {
  return (
    <section id="papers-patents" className="relative min-h-screen bg-transparent py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tighter mb-4">
              Papers & <span className="text-[var(--accent-primary)]">Patents</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl text-lg font-light">
              Featured research and intellectual property.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PATENTS.map((item) => (
            <GridItem
              key={item.id}
              item={item}
            />
          ))}
        </ul>

        <div className="mt-24">
          <BackToTop />
        </div>
      </div>
    </section>
  );
}

const GridItem = ({ item }: { item: any }) => {
  const Icon = ICONS[item.iconKey] ?? FileText;

  return (
    <li className="list-none min-h-[14rem]">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-[var(--glass-border)] p-2 md:rounded-[1.5rem] md:p-3 bg-[var(--glass-bg)]/30 backdrop-blur-md">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-[var(--glass-border)] bg-[var(--card)] p-6 shadow-sm group hover:bg-[var(--accent-primary)]/5 transition-colors duration-500">
          <div className="relative flex flex-1 flex-col gap-6">

            {/* Top Row: Icon Box + Badge */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--glass-border)] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[var(--accent-primary)]" />
              </div>
              <PatentBadge category={item.category} />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl leading-tight font-semibold font-sans tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                {item.title}
              </h3>
              <p className="font-mono text-xs md:text-sm text-[var(--text-secondary)] opacity-70 whitespace-pre-line leading-relaxed">
                {item.identifier}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

