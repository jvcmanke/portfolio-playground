import * as React from "react";

import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

export type HeroSectionProps = {
  nextSectionId: string;
};

export const HeroSection: React.FC<HeroSectionProps> = ({ nextSectionId }) => {
  return (
    <section
      id="heroSection"
      className="relative flex h-screen items-center justify-center gap-24 flex-col sm:flex-row"
    >
      <div className="order-2 sm:order-1 text-center sm:text-left">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          Hi! My name is João,
        </h1>
        <h2 className="text-2xl sm:text-3xl">
          I&apos;m a Full Stack developer!
        </h2>
        <p className="mt-12 sm:text-xl text-lg">
          I also love to learn and share knowledge whenever I can! <br /> Keep
          going to lean more about me!
        </p>
      </div>
      <div className="relative h-60 w-60 order-1 sm:order-2">
        <Image
          className="rounded-full"
          alt="My Profile Pic"
          src="https://avatars.githubusercontent.com/u/64326253"
          layout="fill"
        />
      </div>
      <div className="absolute bottom-8 hidden sm:block">
        <Link href={`#${nextSectionId}`} scroll>
          <ChevronDownIcon className="h-10 w-10 cursor-pointer text-black hover:opacity-75" />
        </Link>
      </div>
    </section>
  );
};
