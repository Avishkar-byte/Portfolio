"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import BackToTop from "./BackToTop";
import {
  Rocket,
  Award,
  Globe,
  Cpu,
  Star,
  TrendingUp,
  Zap,
  Search,
  Target,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { EXPERIENCES } from "@/data/experience";

// --- Icon Map ---
const ICON_MAP: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

import ExperienceDetailsModal from "@/components/ui/ExperienceDetailsModal";
import { ExperienceData } from "@/types";

// ... existing imports

export default function JourneySection() {
  const [selectedExperience, setSelectedExperience] = React.useState<ExperienceData | null>(null);

  // Transform EXPERIENCES into TimelineEntry format
  const timelineData = EXPERIENCES.map((exp) => ({
    title: exp.title,
    content: (
      <div className="relative group overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-sm p-8 transition-all duration-300 hover:border-[var(--accent-primary)]/30 hover:shadow-[0_0_30px_-5px_var(--accent-glow)]">

        {/* Gradient Reveal */}
        <div className="opacity-0 group-hover:opacity-100 transition duration-500 absolute inset-0 h-full w-full bg-gradient-to-br from-[var(--accent-primary)]/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[var(--accent-primary)]">
            {ICON_MAP[exp.iconType]}
            <span className="text-sm font-mono opacity-80">{exp.company}</span>
          </div>

          <h4 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
            {exp.role}
          </h4>

          <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg">
            {exp.description}
          </p>

          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-[var(--glass-border)] text-[var(--text-secondary)] hover:bg-[var(--glass-bg)] hover:text-[var(--accent-primary)] transition-colors"
              onClick={() => setSelectedExperience(exp)}
            >
              View Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }));

  return (
    <section id="experience" className="relative min-h-screen bg-transparent">
      <Timeline data={timelineData} />

      <ExperienceDetailsModal
        item={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />

      <div className="pb-24 px-4 md:px-10">
        <BackToTop />
      </div>
    </section>
  );
}
