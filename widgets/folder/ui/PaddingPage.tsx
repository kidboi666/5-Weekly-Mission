import { atom, useAtom } from "jotai";
import React, { ReactNode } from "react";

const PaddingPage = ({ children }: { children: ReactNode }) => {
  return <div style={{ padding: "0px 32px" }}>{children}</div>;
};

export default PaddingPage;
