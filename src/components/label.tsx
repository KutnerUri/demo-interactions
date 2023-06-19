import { css } from "@stitches/react";
import cn from "classnames";
import { theme } from "./theme";

const labelStyle = css({
  background: theme.backgroundAccent,
  color: theme.onAccent,
  "--bg-opacity": 0.85,
  padding: "0.25em",
  borderRadius: "0.25em",

  transition: "all 300ms"
});

export function Label({ status, className, ...rest }: any) {
  return <span className={cn(labelStyle(), className)} {...rest} />;
}
