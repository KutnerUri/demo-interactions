import { css, keyframes } from "@stitches/react";
import { times } from "../times";

export const doubleBlinkKeyframes = keyframes({
  "0%, 50%, 95%, 100%": { opacity: 1 },
  "25%, 70%": { opacity: 0.38 },
  "35%, 80%": { opacity: 0.61 },
});

const pulseKeyframes = keyframes({
  "0%, 100%": { opacity: 1 },
  "38%, 61%": { opacity: 0.61 },
});

// "don't blink, or you'll me me"
export const doubleBlink = css({
  animation: `${doubleBlinkKeyframes} ${times.relaxed} `,
});

// "don't blink, or you'll me me"
export const shine = css({
  animation: `${pulseKeyframes} ${times.sloth} `,
});
