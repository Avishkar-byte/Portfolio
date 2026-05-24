import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

import { StarButton } from "@/components/ui/star-button";
import SkillsMarquee from "@/components/ui/skills-marquee";
import { Download, Github, Linkedin } from "lucide-react";

import { PROFILE } from "@/data/profile";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HomeSection() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  // Multilingual Hello logic
  const greetings = ["hello", "नमस्ते", "hola", "bonjour", "こんにちは"];
  const [greetingIndex, setGreetingIndex] = useState(() => Math.floor(Math.random() * greetings.length));

  useEffect(() => {
    if (isLoaded) return;
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 800); // cycle every 800ms
    return () => clearInterval(interval);
  }, [isLoaded]);

  // On mobile, mark loaded immediately (no Spline to wait for)
  useEffect(() => {
    if (isMobile && !isLoaded) {
      const timer = setTimeout(() => setIsLoaded(true), 2400);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isLoaded]);

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
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]/80 backdrop-blur-md md:backdrop-blur-2xl overflow-hidden min-h-[100dvh]"
          >
            {/* Ambient Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 md:opacity-100">
              <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--accent-primary)]/20 rounded-full blur-3xl md:blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600/10 rounded-full blur-3xl md:blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            </div>

            {/* Apple-style Multilingual Greeting */}
            <div className="relative flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={greetingIndex}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute"
                >
                  <div className="flex flex-col items-center gap-6">
                    <span
                      className="text-6xl md:text-8xl text-white tracking-wider"
                      style={{ fontFamily: "'Playball', cursive" }}
                    >
                      {greetings[greetingIndex]}
                    </span>
                    <span className="text-sm tracking-[0.3em] text-white/50 font-light uppercase animate-pulse">
                      Initializing...
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="home" className="w-full min-h-[100dvh] flex flex-col overflow-hidden relative bg-transparent" aria-label="Home" tabIndex={-1} ref={containerRef}>

        {/* ── MOBILE LAYOUT: Glowing orb hero first, then text ── */}
        <div className="flex flex-col md:hidden w-full">

          {/* 1. CSS-only Glowing Orb Placeholder (replaces SplineScene) */}
          <div className="w-full h-[60vh] relative flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/30 to-transparent blur-3xl animate-pulse" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/10 blur-2xl" style={{animationDuration: '3s'}} />
              <div className="absolute inset-16 rounded-full bg-[var(--accent-primary)]/10 blur-xl animate-pulse" style={{animationDuration: '5s'}} />
            </div>
          </div>

          {/* 2. Text / Details Section */}
          <motion.div
            id="home-intro"
            className="w-full px-4 sm:px-6 py-12 space-y-6 z-10"
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
              <motion.h1 variants={fadeIn} className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">
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

              {/* Stats Badges — 2 columns on mobile */}
              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-2 pt-1">
                {PROFILE.stats.map((stat, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/5 backdrop-blur-md text-[var(--text-secondary)] shadow-[0_0_12px_rgba(139,92,246,0.08)] transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] opacity-80 shrink-0" />
                    {stat}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Links — stacked full-width on mobile */}
            <motion.div variants={fadeIn} className="pt-2 flex flex-col w-full gap-3">
              <StarButton
                href={PROFILE.resumeLink}
                target="_blank"
                download
                lightColor="rgba(241,245,249,0.6)"
                className="w-full h-12 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
              >
                <div className="flex items-center justify-center w-full h-full gap-2">
                  <Download size={20} className="shrink-0 text-[var(--accent-primary)]" />
                  <span className="text-[var(--text-primary)]">Resume</span>
                </div>
              </StarButton>

              <StarButton
                href={PROFILE.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                lightColor="rgba(241,245,249,0.6)"
                className="w-full h-12 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
              >
                <div className="flex items-center justify-center w-full h-full gap-2">
                  <Github size={20} className="shrink-0 text-[var(--accent-primary)]" />
                  <span className="text-[var(--text-primary)]">GitHub</span>
                </div>
              </StarButton>

              <StarButton
                href={PROFILE.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                lightColor="rgba(241,245,249,0.6)"
                className="w-full h-12 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
              >
                <div className="flex items-center justify-center w-full h-full gap-2">
                  <Linkedin size={20} className="shrink-0 text-[var(--accent-primary)]" />
                  <span className="text-[var(--text-primary)]">LinkedIn</span>
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

              <motion.p variants={fadeIn} className="text-white/90 text-base leading-relaxed max-w-lg pt-2">
                {PROFILE.summary}
              </motion.p>

              {/* Stats Badges — with glow hover */}
              <motion.div variants={fadeIn} className="grid grid-cols-3 gap-2 pt-1">
                {PROFILE.stats.map((stat, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/5 backdrop-blur-md text-[var(--text-secondary)] shadow-[0_0_12px_rgba(139,92,246,0.08)] hover:bg-white/10 hover:border-[var(--accent-primary)]/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all duration-300 glow-shadow-hover"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] opacity-80 shrink-0" />
                    {stat}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Links — with micro-interaction lift */}
            <motion.div variants={fadeIn} className="pt-4 flex flex-wrap gap-4">
              <StarButton
                href={PROFILE.resumeLink}
                target="_blank"
                download
                lightColor="rgba(241,245,249,0.6)"
                className="w-12 h-12 hover:w-32 hover:-translate-y-0.5 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
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
                className="w-12 h-12 hover:w-32 hover:-translate-y-0.5 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
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
                className="w-12 h-12 hover:w-32 hover:-translate-y-0.5 transition-all duration-300 ease-out overflow-hidden px-0 group border-[var(--glass-border)] bg-[var(--glass-bg)]"
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
              onLoad={() => setIsLoaded(true)}
            />
            <div className="absolute bottom-0 left-0 w-full h-14 bg-black z-20 pointer-events-none" />
          </div>
        </div>

      </section>
    </>
  );
}
