import { useState, useEffect, useCallback } from "react";

const SECTIONS = ["home", "projects", "papers-patents", "experience", "contact"];

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 80;
    let current = "home";

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
}
