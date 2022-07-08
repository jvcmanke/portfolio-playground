import * as React from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a id="top" />
      <Header />
      <main className="container mx-auto flex-grow px-8">{children}</main>
      <Footer />
    </div>
  );
};
