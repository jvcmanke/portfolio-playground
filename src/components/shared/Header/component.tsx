import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 grid grid-cols-2 content-center bg-black py-4 px-8 text-white">
      <div className="flex items-baseline gap-2 self-center">
        <h1 className="text-lg">João Victor Manke</h1>
        <h3 className="text-sm">Full Stack Software Developer</h3>
      </div>
      <div className="flex items-center gap-8 justify-self-end">
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a href="/assets/CV.pdf" download="Resume-JoaoVictorManke.pdf">
            <button className="rounded-full bg-slate-600 px-4 py-1 shadow-lg transition-colors hover:bg-slate-500">
              Resume
            </button>
          </a>
          <a
            className="flex justify-center underline"
            href="https://github.com/jvcmanke"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              width={32}
              height={32}
              src="/assets/GitHub-Mark-Light.png"
              alt="GitHub Icon"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
