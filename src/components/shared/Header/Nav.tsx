import Link from "next/link";
import * as React from "react";
import { Url } from "url";

export type NavLinkProps = {
  children: React.ReactNode;
  href: Url | string;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <li className="w-full py-4 text-center hover:bg-gray-900 hover:opacity-75 sm:py-0 sm:hover:bg-black">
      <Link href={href}>{children}</Link>
    </li>
  );
};

type NavComponents = {
  Link: typeof NavLink;
};

export type NavProps = {
  children: React.ReactNode;
};

export const Nav: React.FC<NavProps> & NavComponents = ({ children }) => {
  return (
    <nav className="w-full sm:w-auto">
      <ul className="flex flex-col items-center gap-0 sm:flex-row sm:gap-4">
        {children}
      </ul>
    </nav>
  );
};

Nav.Link = NavLink;
