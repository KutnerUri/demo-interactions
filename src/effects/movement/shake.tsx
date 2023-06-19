import { css, keyframes } from "@stitches/react";
import { times } from "../times";

const shakeTransform = keyframes({
  "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
  "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
  "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
  "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
  "40%": { transform: "translate(1px, -3px) rotate(1deg)" },
  "50%": { transform: "translate(-1px, 3px) rotate(-1deg)" },
  "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
  "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
  "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
  "90%": { transform: "translate(1px, 3px) rotate(0deg)" },
  "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
});

export const shake = css({
  animation: `${shakeTransform} ${times.long} infinite cubic-bezier(.36,.07,.19,.97) both`,
  transform: "translate3d(0, 0, 0)",
  "backface-visibility": "hidden",
  perspective: "1000px",
});

// @ts-ignore
shake.displayName = "shake";
