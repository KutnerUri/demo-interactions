import { css } from "@stitches/react";
import { theme } from "../../style/theme";

export const activationStyle = css({
  color: theme.neutralColor,
  "&:before": {
    display: "inline-block",
    transform: "scale(0.5)",

    content: "'○'",
  },

  "&[aria-checked='true']": {
    color: theme.accentColor,
    "&:before": {
      content: "'●'",
      color: "inherit",
    },

    boxShadow: "var(--shadow-inset-2)",
  },
});

export const interactiveActivation = css({
  "&[aria-checked='true']": {
    "&:hover": {
      boxShadow: "var(--shadow-inset-1)",
    },

    "&:active": {
      boxShadow: "none",
    },
  },
});
