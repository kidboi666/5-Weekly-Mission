import React from "react";
import LogoImgSrc from "./imgSrc/Linkbrary.svg";
import { LinkFrame, Link2Home, To } from "./design";

export const LinkArea = function ({ children }) {
  return (
    <LinkFrame>
      <Link2Home to="/">
        <img src={LogoImgSrc} alt={"Link-brary 로고"} />
      </Link2Home>
      <To>{children}</To>
    </LinkFrame>
  );
};
