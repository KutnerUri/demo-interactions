import { css, styled } from "@stitches/react";
import { times } from "../effects/times";

const indicatorStyle = css({
  pointerEvents: "none",
  display: "inline-block",
  position: "absolute",
  left: "13em",
  marginTop: "-2em",
});

export function InteractionIndicator() {
  return (
    <div className={indicatorStyle()}>
      <Resting>(resting)</Resting>
      <DisabledIndicator>:disabled</DisabledIndicator>
      <HoverIndicator>:hover</HoverIndicator>
      <FocusIndicator>:focus</FocusIndicator>
      <ActiveIndicator>:active</ActiveIndicator>
    </div>
  );
}

const Resting = styled("div", {
  opacity: 0,
  transition: `all ${times.snappy}`,
  ":not(:hover, :active, :disabled, :focus, :checked) + * > &": {
    opacity: 1,
  },
});

// styles and components for each of the interaction indicators:

const HoverIndicator = styled("div", {
  opacity: 0,
  transition: `all ${times.snappy}`,
  ":hover + * > &": {
    opacity: 1,
  },
});

const FocusIndicator = styled("div", {
  opacity: 0,
  transition: `all ${times.snappy}`,
  ":focus + * > &": {
    opacity: 1,
  },

  ":focus-visible + * > &:after": {
    content: "' (:focus-visible)'",
  },
});

const ActiveIndicator = styled("div", {
  opacity: 0,
  transition: `all ${times.snappy}`,
  ":active + * > &": {
    opacity: 1,
  },
});

const DisabledIndicator = styled("div", {
  opacity: 0,
  transition: `all ${times.snappy}`,
  ":disabled + * > &": {
    opacity: 1,
  },
});
