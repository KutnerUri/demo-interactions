import { css, keyframes } from "@stitches/react";
import { times } from "../../effects/times";
import { theme } from "../../style/theme";

const levitate = keyframes({
  "0%, 100%": { transform: "translate(0px, 0.2em)" },
  "10%, 90%": { transform: "translate(-0.05em, 0.3em)" },
  "20%, 80%": { transform: "translate(0.05em, 0.10em)" },
  "30%, 70%": { transform: "translate(-0.1em, 0.2em)" },
  "45%": { transform: "translate(0em, 0.25em)" },
  "55%": { transform: "translate(0em, 0.15em)" },
  "40%, 60%": { transform: "translate(0.1em, 0.2em)" },
});

const RADIUS = {
  rest: "2em",
  focus: "0.25em",
};
const OPACITY_DISABLED = 0.61;
const OPACITY_BG = {
  rest: 0.05,
  hover: 0.09,
  active: 0.16,
  success: 0.09,
  error: 0.38,
};

export const button = css({
  display: "inline-block",
  padding: "0.38em 0.85em",
  borderRadius: RADIUS.rest,
  boxSizing: "border-box",
  fontFamily: "inherit",
  fontSize: "inherit",

  border: `1px solid ${theme.accentColor}`,
  background: theme.backgroundAccent,
  "--bg-opacity": OPACITY_BG.rest,
  color: theme.accentColor,

  transition: `all ${times.snappy} ease-in-out`,
  "backface-visibility": "hidden",
  perspective: "1000px",

  "&:disabled": {
    opacity: OPACITY_DISABLED,
    "--bg-opacity": OPACITY_BG.rest,
    // disable changes from :hover and :active
    transform: "none",
    boxShadow: "none",
  },
});

export const interactiveButton = css({
  "&:hover": {
    "--bg-opacity": OPACITY_BG.hover,
    boxShadow: "var(--shadow-layer-4)",
  },

  "&:focus-visible": {
    borderRadius: RADIUS.focus,
    boxShadow: "var(--shadow-layer-4)",
  },

  "&:active": {
    "--bg-opacity": OPACITY_BG.active,
    transform: "translate(0, 0.2em)",
    boxShadow: "var(--shadow-layer-0)",

    animation: `${levitate} ${times.long} infinite linear`,
    animationDelay: times.long,
  },
});
