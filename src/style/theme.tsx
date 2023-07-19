import { css } from "@stitches/react";

// do NOT export
const values = {
  royalBlue: "65, 105, 225",
};

export const theme = {
  accentColor: "rgb(var(--accent-color))",

  background: "rgba(var(--bg-color), var(--bg-opacity))",
  backgroundAccent: "rgba(var(--accent-color), var(--bg-opacity))",
  // backgroundAccentFull: "rgba(var(--accent-color), var(--bg-opacity))",
  /** @deprecated */
  invisBorder: "var(--invis-border-color)",
  borderColor: "var(--border-color)",

  onAccent: "var(--on-accent-color)",

  successColor: "rgb(var(--success-color))",
  successBgColor: "rgb(var(--success-color), var(--bg-opacity))",
  onSuccessColor: "var(--on-success-color, var(--on-accent-color))",

  dangerColor: "rgb(var(--error-color))",
  dangerBgColor: "rgb(var(--error-color), var(--bg-opacity))",
  onDangerColor: "var(--on-error-color, var(--on-accent-color))",

  neutralColor: "rgb(var(--neutral-color))",
  neutralBgColor: "rgb(var(--neutral-color), var(--bg-opacity))",
  onNeutralColor: "var(--on-neutral-color, var(--on-accent-color))",

} as const;

export const modernTheme = css({
  transition: "all 300ms",
  background: "#ffffff",
  color: "#000000d8",

  "--accent-color": values.royalBlue,
  "--bg-color": "0, 0, 0",
  /** @deprecated */
  "--invis-border-color": "transparent",
  "--border-color": "hsla(0, 0%, 61%, 0.85)",

  "--on-accent-color": "#ffffff",

  "--success-color": "42, 156, 38",
  "--error-color": "215, 91, 91",
  "--warn-color": "240, 192, 48",
  "--neutral-color": "120, 120, 120",

  "--on-success-color": "#ffffff",
  "--on-error-color": "#ffffff",
  "--on-warn-color": "#ffffff",
  "--on-neutral-color": "#ffffff",

  "--shadow":
    "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  "--shadow-none": "none",
});

export const cyberpunkTheme = css({
  transition: "all 300ms",
  background: "#121212",
  color: "#ffffffd8",
  "--accent-color": values.royalBlue,
  "--bg-color": "255, 255, 255",

  "--on-accent-color": "#000000d8",
  "--success-color": "#d600ff",
  "--error-color": "#FFA700",
});
