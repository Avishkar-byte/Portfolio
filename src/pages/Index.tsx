import { lazy, Suspense, useEffect } from "react";
import PortfolioNav from "../components/portfolio/PortfolioNav";
import HomeSection from "../components/portfolio/HomeSection";

// Lazy load heavy sections
const ProjectsSection = lazy(() => import("../components/portfolio/ProjectsSection"));
const PapersPatentsSection = lazy(() => import("../components/portfolio/PapersPatentsSection"));
const JourneySection = lazy(() => import("../components/portfolio/JourneySection"));
const Footer = lazy(() => import("../components/ui/footer-section").then(m => ({ default: m.Footer })));
const WavePath = lazy(() => import("../components/ui/wave-path").then(m => ({ default: m.WavePath })));

const Index = () => {
  // Force scroll to top on page load/refresh
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PortfolioNav />
      {/* 
        Removed overflow-x-hidden and snap classes from main. 
        Body/HTML handles global scroll and snap (set in index.css).
        This ensures sticky elements inside main stick to the viewport, not this container.
      */}
      <main className="w-full">
        <div className="snap-start"><HomeSection /></div>

        {/* Global Fixed Background Layer */}



        <Suspense fallback={<div className="min-h-screen" />}>
          <ProjectsSection /> {/* Internally has snap points */}
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <div className="snap-start"><PapersPatentsSection /></div>
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <div className="snap-start"><JourneySection /></div>
        </Suspense>
      </main>

      <div id="contact" className="snap-start relative">
        <Suspense fallback={<div className="h-20" />}>
          <div className="absolute top-0 left-0 right-0 -mt-10 flex justify-center w-full z-20 overflow-hidden">
            <WavePath className="w-[80vw] md:w-[60vw]" />
          </div>
        </Suspense>
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
