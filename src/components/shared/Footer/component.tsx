import * as React from "react";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="py-4 px-8">
      <p className="text-center">Created by João Victor Manke</p>
    </footer>
  );
};
