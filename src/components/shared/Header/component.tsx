import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { HeaderMenu } from "../HeaderMenu";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 grid grid-cols-2 content-center bg-black px-6 text-white sm:px-8">
      <div className="flex items-baseline gap-2 self-center py-4">
        <h1 className="text-lg">João Victor Manke</h1>
        <h3 className="hidden text-sm sm:inline">
          Full Stack Software Developer
        </h3>
      </div>
      <div className="h-full self-stretch justify-self-end">
        <HeaderMenu>
          <div className="flex flex-col items-center gap-4 pb-4 sm:flex-row sm:gap-8 sm:pb-0">
            <nav className="w-full sm:w-auto">
              <ul className="flex flex-col items-center gap-0 sm:flex-row sm:gap-4">
                <li className="w-full py-4 text-center hover:bg-gray-900 hover:opacity-75 sm:py-0 sm:hover:bg-black">
                  <Link href="/">Home</Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
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
        </HeaderMenu>
      </div>
    </header>
  );
};
