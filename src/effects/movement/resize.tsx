import { css, keyframes } from "@stitches/react";
import { times } from "../times";

export const grow = css({
  transform: "scale(1.1)",
});

export const shrink = css({
  transform: "scale(0.9)",
});

export const heartbeatKeyframe = keyframes({
  "0%": { transform: "scale(1)" },
  "38%": { transform: "scale(1)" },
  "61%": { transform: "scale(1.02)" },
  "76%": { transform: "scale(1)" },
  "100%": { transform: "scale(1)" },
});

export const heartbeat = css({
  animation: `${heartbeatKeyframe} ${times.relaxed} ease infinite`,
});
