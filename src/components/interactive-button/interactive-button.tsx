import useStateMachine from "@cassiozen/usestatemachine";
import classNames from "classnames";
import { MouseEvent, ReactNode } from "react";
import { interactiveStyle } from "../../style/interactive-style";
import { accents } from "../accent";
import { Loader } from "../horiz-loader";
import { button, interactiveButton } from "./button-style";
import { activationStyle, interactiveActivation } from "./checked-button-style";

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
export type ButtonProps = Omit<HtmlButtonProps, "onClick"> & {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | Promise<any>;
  on?: boolean;
  successMessage?: ReactNode;
  errorMessage?: ReactNode;
  successClass?: string;
  errorClass?: string;
  loader?: ReactNode;
  loading?: true | false | undefined | "success" | "error";
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
  loading: loadingProp,
  ...props
}: ButtonProps) {
  const [stateMachine, emitLoadingEvent] = useLoadingStateMachine();
  const loadingState =
    loadingProp !== undefined ? loadingProp : stateMachine.value;
  const activated = on ? "on" : on === false ? "off" : undefined;
  const interactive = onClick !== undefined && !disabled;
  const isCheckbox = activated !== undefined;

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
      disabled={loadingState === "loading" || disabled}
      className={classNames(
        className,
        button(),
        interactive && interactiveStyle(),
        interactive && interactiveButton(),
        isCheckbox && activationStyle(),
        isCheckbox && interactive && interactiveActivation(),
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
