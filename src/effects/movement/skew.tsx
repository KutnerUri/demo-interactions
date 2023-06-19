import { css, keyframes } from "@stitches/react";
import { times } from "../times";

export const skew = css({
  transform: "rotate(9deg)",
  transition: `all ${times.normal} ease-out` 
});

// @ts-ignore
skew.displayName = "skew";
