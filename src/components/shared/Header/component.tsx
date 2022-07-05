import Link from "next/link";
import * as React from "react";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 right-0 left-0 grid grid-cols-2 py-4 px-8 content-center bg-black text-white z-50">
      <div className="flex gap-2 items-center">
        <h1 className="text-lg leading-none">João Victor Manke</h1>
        <h3 className="text-sm self-end">Full Stack Software Developer</h3>
      </div>
      <nav className="justify-self-end">
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
    </header>
  );
};
