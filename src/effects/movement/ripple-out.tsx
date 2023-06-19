import { css, keyframes } from "@stitches/react";
import { times } from "../times";

const rippleOutKeyframes = keyframes({
  "0%": { boxShadow: "0 0 0 0em rgba(65, 105, 225, 0.38)" },
  "85%": { boxShadow: "0 0 0 0 2em rgba(65, 105, 225, 0.23)" },
  "100%": { boxShadow: "0 0 0 3em rgba(65, 105, 225, 0)" },
});

export const rippleOut = css({
  animation: `${rippleOutKeyframes} ${times.long} ease infinite`,
});
