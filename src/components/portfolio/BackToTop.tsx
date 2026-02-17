import { cn } from "@/lib/utils";

export default function BackToTop({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn("back-to-top", className)} aria-label="Back to top of page">
      ↑ Back to top
    </a>
  );
}
