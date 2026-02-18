import { useRef } from "react";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

import { StarButton } from "@/components/ui/star-button";
import SkillsMarquee from "@/components/ui/skills-marquee";
import { Download, Github, Linkedin, GraduationCap } from "lucide-react";

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
    <section id="home" className="w-full min-h-screen flex flex-col justify-center overflow-hidden px-4 md:px-8 py-12 md:py-20 relative bg-transparent" aria-label="Home" tabIndex={-1} ref={containerRef}>

      <div className="w-full max-w-7xl mx-auto relative">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 opacity-50" fill="var(--accent-primary)" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 min-h-[500px]">
          {/* Left content - Neural Network Hero Style */}
          <motion.div
            className="flex-1 space-y-6 z-10 max-w-2xl pt-10 md:pt-0"
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
              <motion.h1 variants={fadeIn} className="text-3xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight">
                {PROFILE.name}
              </motion.h1>

              <motion.ul variants={staggerContainer} className="flex flex-wrap gap-3 text-xs font-extralight tracking-tight text-[var(--text-secondary)] pt-1">
                {PROFILE.roles.map((role, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-[var(--accent-secondary)]" /> {role}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p variants={fadeIn} className="text-[var(--text-secondary)] text-base leading-relaxed max-w-lg pt-2">
                {PROFILE.summary}
                <br />
                Selected impact: {PROFILE.stats}
              </motion.p>
            </div>

            {/* Skills & Links - Replaced with Star Button Links (Expandable) */}
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

            {/* Skills Marquee Section */}
            <motion.div variants={fadeIn} className="pt-2 w-full -ml-4">
              <SkillsMarquee />
            </motion.div>
          </motion.div>

          {/* Right content - 3D Scene */}
          <div className="flex-1 w-full h-[500px] md:h-[700px] relative -mr-10 md:-mr-20 lg:-mr-30 -mt-32 md:-mt-48 overflow-hidden">
            <SplineScene
              scene="https://prod.spline.design/F6uOMiexEZ51tNm5/scene.splinecode"
              className="w-full h-full scale-90 md:scale-100 origin-center"
            />
            {/* Watermark Mask Strip - Adjust 'h-8' to change height */}
            <div className="absolute bottom-0 left-0 w-full h-14 bg-black z-20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
