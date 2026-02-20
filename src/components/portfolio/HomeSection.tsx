import { useRef } from "react";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

import { StarButton } from "@/components/ui/star-button";
import SkillsMarquee from "@/components/ui/skills-marquee";
import { Download, Github, Linkedin } from "lucide-react";

import { PROFILE } from "@/data/profile";

export default function HomeSection() {
  const containerRef = useRef(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="home" className="w-full min-h-screen flex flex-col overflow-hidden relative bg-transparent" aria-label="Home" tabIndex={-1} ref={containerRef}>

      {/* ── MOBILE LAYOUT: Robot (hero) first, then text ── */}
      <div className="flex flex-col md:hidden w-full">

        {/* 1. Full-screen Robot Hero */}
        <div className="w-full h-screen relative overflow-hidden flex items-center justify-center">
          <Spotlight className="-top-40 left-0 opacity-50" fill="var(--accent-primary)" />
          <SplineScene
            scene="https://prod.spline.design/F6uOMiexEZ51tNm5/scene.splinecode"
            className="w-full h-full scale-90 origin-center"
          />
          {/* Watermark Mask Strip */}
          {/* Watermark mask — taller on mobile to fully cover Spline badge */}
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-14 bg-black z-20 pointer-events-none" />

          {/* Premium Scroll Button */}
          <a
            href="#home-intro"
            className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 group cursor-pointer select-none"
          >
            {/* Pill button */}
            <div className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.15)] group-hover:border-white/20 group-hover:bg-white/10 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-500">
              <span className="text-[10px] uppercase tracking-[0.2em] font-light text-white/60 group-hover:text-white/90 transition-colors duration-300">Scroll</span>
              {/* Animated chevrons */}
              <div className="flex flex-col items-center -space-y-1.5">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="text-[var(--accent-primary)] opacity-40 group-hover:opacity-100 transition-opacity duration-300 delay-0">
                  <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="text-[var(--accent-primary)] opacity-70 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="text-[var(--accent-primary)] opacity-100 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* 2. Text / Details Section */}
        <motion.div
          id="home-intro"
          className="w-full px-6 py-12 space-y-6 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1.5 backdrop-blur-sm w-fit">
            <span className="text-[10px] font-light uppercase tracking-[0.08em] text-[var(--text-secondary)]">{PROFILE.subtitle}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--accent-primary)]" />
            <span className="text-xs font-light tracking-tight text-[var(--text-primary)]">{PROFILE.title}</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1 variants={fadeIn} className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              {PROFILE.name}
            </motion.h1>

            <motion.ul variants={staggerContainer} className="flex flex-wrap gap-3 text-xs font-extralight tracking-tight text-[var(--text-secondary)] pt-1">
              {PROFILE.roles.map((role, i) => (
                <motion.li key={i} variants={fadeIn} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent-secondary)]" /> {role}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p variants={fadeIn} className="text-[var(--text-secondary)] text-base leading-relaxed pt-2">
              {PROFILE.summary}
            </motion.p>

            {/* Stats Badges */}
            <motion.div variants={fadeIn} className="grid grid-cols-3 gap-2 pt-1">
              {PROFILE.stats.map((stat, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/5 backdrop-blur-md text-[var(--text-secondary)] shadow-[0_0_12px_rgba(139,92,246,0.08)] hover:bg-white/10 hover:border-[var(--accent-primary)]/30 transition-all duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] opacity-80 shrink-0" />
                  {stat}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Links */}
          <motion.div variants={fadeIn} className="pt-2 flex flex-wrap gap-4">
            <StarButton
              href={PROFILE.resumeLink}
              target="_blank"
              download
              lightColor="rgba(241,245,249,0.6)"
              className="w-12 h-12 hover:w-32 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Download size={20} className="shrink-0 text-[var(--accent-primary)]" />
                <span className="max-w-0 group-hover:max-w-[100px] overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pl-0 group-hover:pl-2 text-[var(--text-primary)]">
                  Resume
                </span>
              </div>
            </StarButton>

            <StarButton
              href={PROFILE.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              lightColor="rgba(241,245,249,0.6)"
              className="w-12 h-12 hover:w-32 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Github size={20} className="shrink-0 text-[var(--accent-primary)]" />
                <span className="max-w-0 group-hover:max-w-[100px] overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pl-0 group-hover:pl-2 text-[var(--text-primary)]">
                  GitHub
                </span>
              </div>
            </StarButton>

            <StarButton
              href={PROFILE.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              lightColor="rgba(241,245,249,0.6)"
              className="w-12 h-12 hover:w-32 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Linkedin size={20} className="shrink-0 text-[var(--accent-primary)]" />
                <span className="max-w-0 group-hover:max-w-[100px] overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pl-0 group-hover:pl-2 text-[var(--text-primary)]">
                  LinkedIn
                </span>
              </div>
            </StarButton>
          </motion.div>

          {/* Skills Marquee */}
          <motion.div variants={fadeIn} className="pt-2 w-full -ml-4">
            <SkillsMarquee />
          </motion.div>
        </motion.div>
      </div>

      {/* ── DESKTOP LAYOUT: side-by-side ── */}
      <div className="hidden md:flex w-full max-w-7xl mx-auto px-8 py-20 flex-row items-center justify-between gap-10 min-h-screen relative">
        <Spotlight className="-top-40 left-60 md:-top-20 opacity-50" fill="var(--accent-primary)" />

        {/* Left: Text */}
        <motion.div
          className="flex-1 space-y-6 z-10 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1.5 backdrop-blur-sm w-fit">
            <span className="text-[10px] font-light uppercase tracking-[0.08em] text-[var(--text-secondary)]">{PROFILE.subtitle}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--accent-primary)]" />
            <span className="text-xs font-light tracking-tight text-[var(--text-primary)]">{PROFILE.title}</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1 variants={fadeIn} className="text-6xl font-bold text-[var(--text-primary)] tracking-tight">
              {PROFILE.name}
            </motion.h1>

            <motion.ul variants={staggerContainer} className="flex flex-wrap gap-4 text-xs font-extralight tracking-tight text-[var(--text-secondary)] pt-1">
              {PROFILE.roles.map((role, i) => (
                <motion.li key={i} variants={fadeIn} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent-secondary)]" /> {role}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p variants={fadeIn} className="text-[var(--text-secondary)] text-base leading-relaxed max-w-lg pt-2">
              {PROFILE.summary}
            </motion.p>

            {/* Stats Badges */}
            <motion.div variants={fadeIn} className="grid grid-cols-3 gap-2 pt-1">
              {PROFILE.stats.map((stat, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/5 backdrop-blur-md text-[var(--text-secondary)] shadow-[0_0_12px_rgba(139,92,246,0.08)] hover:bg-white/10 hover:border-[var(--accent-primary)]/30 transition-all duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] opacity-80 shrink-0" />
                  {stat}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="pt-4 flex flex-wrap gap-4">
            <StarButton
              href={PROFILE.resumeLink}
              target="_blank"
              download
              lightColor="rgba(241,245,249,0.6)"
              className="w-12 h-12 hover:w-32 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Download size={20} className="shrink-0 text-[var(--accent-primary)]" />
                <span className="max-w-0 group-hover:max-w-[100px] overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pl-0 group-hover:pl-2 text-[var(--text-primary)]">
                  Resume
                </span>
              </div>
            </StarButton>

            <StarButton
              href={PROFILE.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              lightColor="rgba(241,245,249,0.6)"
              className="w-12 h-12 hover:w-32 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Github size={20} className="shrink-0 text-[var(--accent-primary)]" />
                <span className="max-w-0 group-hover:max-w-[100px] overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pl-0 group-hover:pl-2 text-[var(--text-primary)]">
                  GitHub
                </span>
              </div>
            </StarButton>

            <StarButton
              href={PROFILE.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              lightColor="rgba(241,245,249,0.6)"
              className="w-12 h-12 hover:w-32 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Linkedin size={20} className="shrink-0 text-[var(--accent-primary)]" />
                <span className="max-w-0 group-hover:max-w-[100px] overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pl-0 group-hover:pl-2 text-[var(--text-primary)]">
                  LinkedIn
                </span>
              </div>
            </StarButton>
          </motion.div>

          <motion.div variants={fadeIn} className="pt-2 w-full -ml-4">
            <SkillsMarquee />
          </motion.div>
        </motion.div>

        {/* Right: 3D Scene */}
        <div className="flex-1 w-full h-[700px] relative -mr-20 lg:-mr-30 -mt-48 overflow-hidden">
          <SplineScene
            scene="https://prod.spline.design/F6uOMiexEZ51tNm5/scene.splinecode"
            className="w-full h-full scale-100 origin-center"
          />
          <div className="absolute bottom-0 left-0 w-full h-14 bg-black z-20 pointer-events-none" />
        </div>
      </div>

    </section>
  );
}
