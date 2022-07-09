import * as React from "react";

import { HeroSection } from "../HeroSection";

export type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <HeroSection nextSectionId="next-section" />
      <section id="next-section" className="h-screen" />
    </div>
  );
};
