import Link from "next/link";
import * as React from "react";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 grid grid-cols-2 py-4 px-8 content-center">
      <div className="flex gap-2">
        <h1>João Victor Manke</h1>
        <h3>Full Stack Software Developer</h3>
      </div>
      <nav className="justify-self-end">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
