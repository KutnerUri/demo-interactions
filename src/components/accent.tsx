import { css } from "@stitches/react";

export type Accent = "success" | "danger" | "warn" | "neutral";

export const successAccent = css({
  "--accent-color": "var(--success-color)",
  "--on-accent-color": "var(--on-success-color)",
});

export const dangerAccent = css({
  "--accent-color": "var(--error-color)",
  "--on-accent-color": "var(--on-error-color)",
});

export const warnAccent = css({
  "--accent-color": "var(--warn-color)",
  "--on-accent-color": "var(--on-warn-color)",
});

export const neutralAccent = css({
  "--accent-color": "var(--neutral-color)",
  "--on-accent-color": "var(--on-accent-color)",
});

export const accents: Record<Accent, string> = {
  success: successAccent(),
  danger: dangerAccent(),
  warn: warnAccent(),
  neutral: neutralAccent(),
};
