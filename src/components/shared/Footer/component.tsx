import * as React from "react";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black text-white">
      <p className="text-center py-1 px-2 text-sm">
        Created by João Victor Manke
      </p>
    </footer>
  );
};
