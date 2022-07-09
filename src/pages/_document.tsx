import * as React from "react";

import { Head, Html, Main, NextScript } from "next/document";

const Document: React.FC = () => {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
