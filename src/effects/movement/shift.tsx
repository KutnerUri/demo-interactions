import { css, keyframes } from "@stitches/react";

export const shiftUp = css({
  transform: "translate(0, -0.2em)",
});

// @ts-ignore
shiftUp.displayName = "shiftUp";

export const shiftDown = css({
  transform: "translate(0, 0.3em)",
});
