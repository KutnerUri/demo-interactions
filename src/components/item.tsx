import { styled } from "@stitches/react";
import { times } from "../effects/times";
import { theme } from "./theme";

// const accentBgColor = "rgba(var(--accent-rgb), var(--bg-opacity, 0.85))";

export const Item = styled("div", {
  display: "inline-block",
  width: "8em",
  height: "3em",
  //   outline: "5px solid hsl(0, 0%, 85%)",
  borderRadius: "4px",
  border: `2px solid ${theme.borderColor}`,
  background: theme.backgroundAccent,
  transition: `all ${times.normal}`,

  "--bg-opacity": 0.23,

  variants: {
    priority: {
      cta: {
        borderColor: "transparent",
        "--bg-opacity": "0.85",
      },
    },
  },
});
