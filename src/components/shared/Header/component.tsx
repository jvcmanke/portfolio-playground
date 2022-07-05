import Link from "next/link";
import * as React from "react";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 right-0 left-0 grid grid-cols-2 py-4 px-8 content-center bg-black text-white z-50">
      <div className="flex gap-2 items-baseline self-center">
        <h1 className="text-lg">João Victor Manke</h1>
        <h3 className="text-sm">Full Stack Software Developer</h3>
      </div>
      <div className="justify-self-end flex gap-4 items-center">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#top" scroll>
                ARROW
              </Link>
            </li>
          </ul>
        </nav>
        <a href="/assets/CV.pdf" download="Resume-JoaoVictorManke.pdf">
          <button className="rounded-full bg-slate-600 hover:bg-slate-500 shadow-lg transition-colors px-4 py-1">
            Resume
          </button>
        </a>
      </div>
    </header>
  );
};
