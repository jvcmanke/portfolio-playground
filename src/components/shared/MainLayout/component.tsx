import * as React from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-8">{children}</main>
      <Footer />
    </div>
  );
};
