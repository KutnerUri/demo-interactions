import useStateMachine from "@cassiozen/usestatemachine";
import { css, keyframes } from "@stitches/react";
import classNames from "classnames";
import { MouseEvent, ReactNode } from "react";
import { times } from "../effects/times";
import { accents } from "./accent";
import { Loader } from "./horiz-loader";
import { theme } from "./theme";

export const levitate = keyframes({
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

const itemStyle = css(interactiveStyle, {
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
    transform: "translate(0, 0.2em)", // shift down
    boxShadow: "var(--shadow-layer-0)",

    animation: `${levitate} ${times.long} infinite linear`,
    animationDelay: times.long,
  },

  "&:disabled": {
    opacity: OPACITY_DISABLED,
    "--bg-opacity": OPACITY_BG.rest,
    // disable changes from :hover and :active
    transform: "none",
    boxShadow: "none",
  },
});

const activationStyle = css({
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

    "&:hover": {
      boxShadow: "var(--shadow-inset-1)",
    },

    "&:active": {
      boxShadow: "none",
    },

    "&:disabled": {
      // static shadow when disabled:
      boxShadow: "var(--shadow-inset-2)",
    },
  },
});

const SUCCESS_AUTO_DURATION = 2000;
const DEFAULT_SUCCESS_MESSAGE = (
  <>
    <b>✓</b> Done
  </>
);
const DEFAULT_ERROR_MESSAGE = (
  <>
    <b>✗</b> Failed
  </>
);

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type ButtonProps = Omit<HtmlButtonProps, "onClick"> & {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | Promise<any>;
  on?: boolean;
  successMessage?: ReactNode;
  errorMessage?: ReactNode;
  successClass?: string;
  errorClass?: string;
  loader?: ReactNode;
};

/** An element showcasing the different interactive states */
export function InteractiveButton({
  className,
  onClick,
  children,
  disabled,
  on,
  successMessage = DEFAULT_SUCCESS_MESSAGE,
  errorMessage = DEFAULT_ERROR_MESSAGE,
  successClass = accents.success,
  errorClass = accents.danger,
  loader = <Loader />,
  ...props
}: ButtonProps) {
  const [stateMachine, emitLoadingEvent] = useLoadingStateMachine();
  const loadingState = stateMachine.value;
  const activated = on ? "on" : on === false ? "off" : undefined;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    emitLoadingEvent("CLICK");
    if (loadingState === "error") return;

    const result = onClick?.(e);
    const isPromise = result && result.then;
    if (isPromise) {
      emitLoadingEvent("LOAD_START");

      Promise.resolve(result).then(
        () => emitLoadingEvent("SUCCEED"),
        () => emitLoadingEvent("ERR")
      );
    }

    return result;
  };

  const content =
    (loadingState === "success" && successMessage) ||
    (loadingState === "error" && errorMessage) ||
    (loadingState === "loading" && loader) ||
    children;

  return (
    <button
      onClick={handleClick}
      onMouseEnter={(e) => e.target === e.currentTarget && console.log("hover")}
      disabled={loadingState === "loading" || disabled}
      className={classNames(
        className,
        itemStyle(),
        activated !== undefined && activationStyle(),
        loadingState === "success" && successClass,
        loadingState === "error" && errorClass
      )}
      // cheeky way to implement checkbox behavior for a button
      // use a hidden checkbox and a label instead
      role={typeof on !== "undefined" ? "switch" : undefined}
      aria-checked={on}
      {...props}
    >
      {content}
    </button>
  );
}

function useLoadingStateMachine() {
  return useStateMachine({
    initial: "ready",
    states: {
      ready: { on: { LOAD_START: "loading" } },
      loading: { on: { SUCCEED: "success", ERR: "error" } },
      success: {
        on: { CLICK: "ready", HOVER: "ready", AUTO_ADVANCE: "ready" },
        effect: ({ send }) => {
          const tid = setTimeout(
            () => send("AUTO_ADVANCE"),
            SUCCESS_AUTO_DURATION
          );
          return () => clearTimeout(tid);
        },
      },
      error: { on: { CLICK: "ready" } },
    },
  });
}
