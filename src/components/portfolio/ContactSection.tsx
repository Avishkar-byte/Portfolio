"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import BackToTop from "./BackToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming you have these or standard inputs
import { Textarea } from "@/components/ui/textarea"; // Assuming you have these or standard textareas
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Send
} from "lucide-react";

// Helper for Social Links
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20"
  >
    {icon}
  </a>
);

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen bg-transparent py-24 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tighter mb-6">
            Contact <span className="text-[var(--accent-primary)]">& Media</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg font-light">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {/* Left Column: Contact Info */}
          <div className="relative h-full min-h-[300px] rounded-[1.25rem] md:rounded-[1.5rem] border-[0.75px] border-[var(--glass-border)] p-2 md:p-3 bg-[var(--glass-bg)]">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] border-[var(--glass-border)] bg-[var(--card)] p-6 shadow-sm">

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--text-secondary)] font-medium mb-1">Email</p>
                      <a href="mailto:ayushdevxai@gmail.com" className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors text-lg">
                        ayushdevxai@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 font-medium mb-1">Phone</p>
                      <a href="tel:+919305183418" className="text-white hover:text-[var(--accent-primary)] transition-colors text-lg">
                        +91 9305183418
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 font-medium mb-1">Location</p>
                      <p className="text-white text-lg">
                        Vellore Institute of Technology, Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-white font-bold mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  <SocialLink href="https://github.com/yourname" icon={<Github size={20} />} />
                  <SocialLink href="https://linkedin.com/in/yourname" icon={<Linkedin size={20} />} />
                  <SocialLink href="https://twitter.com/yourname" icon={<Twitter size={20} />} />
                  <SocialLink href="#" icon={<Facebook size={20} />} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative h-full min-h-[300px] rounded-[1.25rem] md:rounded-[1.5rem] border-[0.75px] border-white/10 p-2 md:p-3 bg-neutral-900/50">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] border-white/5 bg-[#0a0a0a] p-6 shadow-sm">

              <form className="flex flex-col gap-4 h-full">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/60">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-primary)]/50 focus:bg-[var(--glass-bg)] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/60">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-primary)]/50 focus:bg-[var(--glass-bg)] transition-all"
                  />
                </div>

                <div className="space-y-2 flex-1">
                  <label htmlFor="message" className="text-sm font-medium text-white/60">Your Message</label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full h-full min-h-[150px] bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent-primary)]/50 focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>

                <Button
                  className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-black font-bold py-4 text-lg shadow-lg hover:shadow-[0_0_20px_var(--accent-glow)] transition-all mt-2"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <BackToTop />
        </div>
      </div>
    </section>
  );
}
