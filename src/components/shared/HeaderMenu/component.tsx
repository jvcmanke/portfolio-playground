import * as React from "react";
import { ChevronUpIcon, MenuIcon } from "@heroicons/react/solid";

export type HeaderMenuProps = {
  children: React.ReactNode;
};

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);
  const toggle = () => setOpen((value) => !value);

  return (
    <div className="flex h-full items-center">
      <button className="cursor-pointer sm:hidden" onClick={toggle}>
        {isOpen ? (
          <ChevronUpIcon className="h-7 w-7" />
        ) : (
          <MenuIcon className="h-7 w-7" />
        )}
      </button>
      <div
        className={`${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } absolute left-0 top-full w-screen bg-black transition-all sm:visible sm:static sm:w-auto`}
      >
        {children}
      </div>
    </div>
  );
};
