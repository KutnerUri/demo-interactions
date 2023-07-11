import { css, keyframes } from "@stitches/react";
import { theme } from "../../style/theme";

export const unsaturate = css({
  filter: "saturate(0)",
});

export const hueRotateKeyframe = keyframes({
  "0%": { filter: "hue-rotate(0deg)" },
  "100%": { filter: "hue-rotate(360deg)" },
});

export const hueRotate = css({
  animation: `${hueRotateKeyframe} 10s linear infinite`,
});
