import { styled } from "@stitches/react";
import { times } from "../effects/times";

export const Item = styled("div", {
  display: "inline-block",
  width: "8em",
  height: "3em",
//   border: "2px solid hsl(0, 0%, 100%)",
//   outline: "5px solid hsl(0, 0%, 85%)",
  borderRadius: "4px",
  background: "rgb(var(--accent-rgb), var(--bg-opacity, 0.85))",

  transition: `all ${times.normal}`,
});
