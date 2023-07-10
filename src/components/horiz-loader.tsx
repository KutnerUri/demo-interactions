import { keyframes, styled } from "@stitches/react";
import { times } from "../effects/times";

const swell = keyframes({
  "0%, 23%, 100%": {
    transform: "scale(0)",
  },
  "62%": {
    transform: "scale(1)",
  },
});

export const LoadContainer = styled("span", {
  transform: "translateZ(0)",

  "> *": {
    display: "inline-block",

    borderRadius: "50%",
    width: "1em",
    height: "1em",

    transform: "scale(0)",
    animation: `${swell} ${times.sloth} infinite ease-in-out`,
  },

  ">:nth-child(1)": {
    animationDelay: `-${times.normal}`,
  },

  ">:nth-child(3)": {
    animationDelay: `${times.normal}`,
  },
});

type LoaderProps = React.HTMLAttributes<HTMLSpanElement>;

export const Loader = (props: LoaderProps) => {
  return (
    <LoadContainer {...props}>
      <span>●</span>
      <span>●</span>
      <span>●</span>
    </LoadContainer>
  );
};
