import { css, keyframes } from "@stitches/react";
import { times } from "../times";

const wiggleKeyframe = keyframes({
  "0%": { transform: "rotate(-1deg)" },
  "50%": { transform: "rotate(1deg)" },
});

export const wiggle = css({
  animation: `${wiggleKeyframe} 0.2s infinite`,
  transform: "translate3d(0, 0, 0)",
  "backface-visibility": "hidden",
  perspective: "1000px",
});
