import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export type HeroSectionProps = {
  nextSectionId: string;
};

export const HeroSection: React.FC<HeroSectionProps> = ({ nextSectionId }) => {
  return (
    <section
      id="heroSection"
      className="flex gap-24 items-center justify-center h-screen relative"
    >
      <div>
        <h1 className="text-5xl font-extrabold">Hi! My name is João,</h1>
        <h2 className="text-3xl">I&apos;m a Full Stack developer!</h2>
        <p className="text-xl mt-12">
          I also love to learn and share knowledge whenever I can! <br /> Keep
          going to lean more about me!
        </p>
      </div>
      <div className="w-60 h-60 relative">
        <Image
          className="rounded-full"
          alt="My Profile Pic"
          src="https://avatars.githubusercontent.com/u/64326253"
          layout="fill"
        />
      </div>
      <div className="absolute bottom-8">
        <Link href={`#${nextSectionId}`} scroll>
          ARROW
        </Link>
      </div>
    </section>
  );
};
