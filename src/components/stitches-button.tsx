import { css } from "@stitches/react";
import { ButtonHTMLAttributes } from "react";
import { theme } from "./theme";

const vanillaButton = css({
  "user-select": "none",
  font: "inherit", // reset browser defaults

  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed",
  },
});

const themeStyle = css({
  "--bg-opacity": 0.05,

  "&:hover": {
    "--bg-opacity": 0.08,
  },

  "&:active": {
    "--bg-opacity": 0.13,
  },
});

const intentsStyle = css({
  '&[data-priority="low"]': {
    '&[data-intent="success"]': {
      color: theme.successColor,
    },
    '&[data-intent="danger"]': {
      color: theme.dangerColor,
    },
  },

  '&[data-priority="medium"]': {
    '&[data-intent="success"]': {
      color: theme.successColor,
      background: theme.successBgColor,
      borderColor: theme.successColor,
    },

    '&[data-intent="danger"]': {
      color: theme.dangerColor,
      background: theme.dangerBgColor,
      borderColor: theme.dangerColor,
    },
  },

  '&[data-priority="cta"]': {
    '&[data-intent="success"]': {
      color: theme.onSuccessColor,
      borderColor: theme.successColor,
      background: theme.successBgColor,
    },

    '&[data-intent="danger"]': {
      color: theme.onDangerColor,
      borderColor: theme.dangerColor,
      background: theme.dangerBgColor,
    },
  },
});

const themedButton = css(
  vanillaButton,
  themeStyle,
  intentsStyle,
  {
    transition: "all 180ms ease-in-out",
    padding: ".38em .85em",
    borderRadius: "1em",

    "&:active": {
      transform: "translate(0, .15em)",
    },

    "&:disabled": {
      opacity: 0.61,
    },

    '&[data-priority="low"]': {
      border: `2px solid transparent`,
      background: "transparent", // override browser defaults
      color: theme.accentColor,

      "&:hover, &:active": {
        background: theme.background,
      },
    },

    '&[data-priority="medium"]': {
      border: `2px solid ${theme.accentColor}`,
      background: theme.backgroundAccent,
      color: theme.accentColor,

      "&:not(:hover, :active)": {
        "--bg-opacity": 0,
      },
    },

    '&[data-priority="cta"]': {
      border: `2px solid ${theme.accentColor}`,
      background: theme.backgroundAccent,
      color: theme.onAccent,

      "--bg-opacity": 0.76,

      "&:hover": {
        "--bg-opacity": 0.85,
      },

      "&:active": {
        "--bg-opacity": 1,
      },
    },

    position: "relative",

    ">span": {
      position: "absolute",
      top: "-38%",
      right: "-5%",

      textShadow: "1px 1px 2px black",
      fontSize: "1.5em",
    },
  },
  themeStyle
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  priority?: "low" | "medium" | "cta";
  intent?: "default" | "success" | "danger";
};

export function StitchesButton({
  priority = "medium",
  intent,
  children,
  ...props
}: Props) {
  return (
    <button
      data-priority={priority}
      data-intent={intent}
      className={themedButton()}
      {...props}
    >
      {children}
      <Emoticon intent={intent} />
    </button>
  );
}

function Emoticon({ intent }: { intent?: "default" | "danger" | "success" }) {
  if (intent == "danger") return <span>😨</span>;
  if (intent == "success") return <span>😄</span>;
  // return <span></span>;
  return null;
}
