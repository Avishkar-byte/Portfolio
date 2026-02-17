import { useState, useRef, type ReactNode } from "react";

interface PortfolioAccordionProps {
  summary: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function PortfolioAccordion({
  summary,
  children,
  defaultOpen = false,
}: PortfolioAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <button
        className="accordion-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span>{summary}</span>
        <span aria-hidden="true" style={{ flexShrink: 0, marginLeft: "1rem" }}>
          {open ? "▲" : "▼"}
        </span>
      </button>
      {open && (
        <div className="accordion-content" ref={contentRef} role="region">
          {children}
        </div>
      )}
    </div>
  );
}
