import { css } from "@stitches/react";
import { ClassAttributes, HTMLAttributes } from "react";

export type MessageProps = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    intent: "success" | "error";
  };

const messageStyles = css({
  padding: "0.5em",
  paddingRight: "1em",
  border: "2px solid var(--accent-color, #1212127F)",
  borderLeftWidth: "2em",
  borderRadius: ".5em",
  // margin: "0.5em",

  '&[data-intent="success"]': {
    "--accent-color": "var(--success-color)",
  },

  '&[data-intent="error"]': {
    "--accent-color": "var(--error-color)",
  },

  "> span": {
    color: "var(--on-accent-color, white)",
    marginLeft: "-1.8em",
    marginRight: "1em"
  },
});

export function Message({ intent, children, ...props }: MessageProps) {
  return (
    <div {...props} data-intent={intent} className={messageStyles()}>
      <span>{icon(intent)}</span> {children}
    </div>
  );
}

function icon(intent: "success" | "error") {
  switch (intent) {
    case "error":
      return "X";
    case "success":
      return "✓";
  }
}
