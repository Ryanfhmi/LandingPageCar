import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { Car360Viewer } from "./components/Car360Viewer";
import { CollectionSection } from "./components/CollectionSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { ModelSection } from "./components/ModelSection";
import { FinanceCalculator } from "./components/FinanceCalculator";
import { TestimonialSection } from "./components/TestimonialSection";
import { ContactSection } from "./components/ContactSection";
import { ChatBot } from "./components/ChatBot";
import { StickyCTA } from "./components/StickyCTA";
import { useState } from "react";
import { TestDriveModal } from "./components/TestDriveModal";

export default function App() {
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Car360Viewer />
      <CollectionSection />
      <HighlightsSection />
      <ModelSection />
      <FinanceCalculator />
      <TestimonialSection />
      <ContactSection />
      <ChatBot />
      <StickyCTA onOpenTestDrive={() => setIsTestDriveOpen(true)} />
      <TestDriveModal isOpen={isTestDriveOpen} onClose={() => setIsTestDriveOpen(false)} />
    </div>
  );
}