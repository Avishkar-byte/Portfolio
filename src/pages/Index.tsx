import PortfolioNav from "../components/portfolio/PortfolioNav";
import HomeSection from "../components/portfolio/HomeSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import PapersPatentsSection from "../components/portfolio/PapersPatentsSection";
import JourneySection from "../components/portfolio/JourneySection";



import { WavePath } from "@/components/ui/wave-path";
import { Footer } from "@/components/ui/footer-section";

const Index = () => {
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



        <ProjectsSection /> {/* Internally has snap points */}
        <div className="snap-start"><PapersPatentsSection /></div>
        <div className="snap-start"><JourneySection /></div>
      </main>

      <div id="contact" className="snap-start relative">
        <div className="absolute top-0 left-0 right-0 -mt-10 flex justify-center w-full z-20 overflow-hidden">
          <WavePath className="w-[80vw] md:w-[60vw]" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
