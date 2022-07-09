import * as React from "react";

import { HeroSection } from "../HeroSection";

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSection nextSectionId="next-section" />
      <section id="next-section" className="h-screen" />
    </div>
  );
};
