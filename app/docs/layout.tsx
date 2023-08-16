import { FC, PropsWithChildren } from "react";

type DocsLayoutFC = FC<PropsWithChildren>;

const DocsLayout: DocsLayoutFC = ({ children }) => {
  return (
    <div>
      <div>
        <h1>docs</h1>
        {children}
      </div>
    </div>
  );
};

export default DocsLayout;
