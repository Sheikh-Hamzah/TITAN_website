import Header from "@/components/Header";
import TeaserSection from "@/components/TeaserSection";
import AbstractSection from "@/components/AbstractSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import AlgorithmSection from "@/components/AlgorithmSection";
import ResultsSection from "@/components/ResultsSection";
import AblationSection from "@/components/AblationSection";
import CitationSection from "@/components/CitationSection";
import MarqueeImages   from "@/components/marqueeImages";
const Index = () => {
  return (
    <>
    <div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Circuit Board - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.04) 19px, rgba(75, 85, 99, 0.04) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.04) 39px, rgba(75, 85, 99, 0.04) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.04) 19px, rgba(75, 85, 99, 0.04) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.04) 39px, rgba(75, 85, 99, 0.04) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.04) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.04) 2px, transparent 2px)
      `,
      backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
    }}
  />
  {/* Your Content/Components */}

    <div className="min-h-screen bg-background font-academic overflow-x-hidden">
      <Header />
      <MarqueeImages/>
      <TeaserSection />
      <AbstractSection />
      <ArchitectureSection />
      <AlgorithmSection />
      <ResultsSection />
      <AblationSection />
      <CitationSection />
    </div>
    </div>
    
    
    </>
    
  );
};

export default Index;
