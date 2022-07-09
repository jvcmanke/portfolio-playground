import * as React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 content-center justify-items-center py-8 px-8">
        <div />
        <div />
        <div className="text-center">
          <h4 className="text-lg font-bold">Useful links:</h4>
          <ul>
            <li>
              <a
                className="underline hover:text-gray-400"
                href="https://github.com/jvcmanke"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-gray-400"
                href="/assets/CV.pdf"
                download="Resume-JoaoVictorManke.pdf"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-gray-400"
                href="/assets/settings.json"
                download="settings.json"
              >
                VSCode Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-1 px-2 text-center text-sm">
        Created by João Victor Manke
      </p>
    </footer>
  );
};
