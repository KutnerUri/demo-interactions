import { css, keyframes } from "@stitches/react";
import { times } from "../times";

const gradientKeyframes = keyframes({
  "0%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0% 50%" },
});

export const ripple = css({
  background:
    "linear-gradient(270deg, #ffdc67, #ff763b, #ff6ec4, #8f94fb, #47bfff)",
  backgroundSize: "1000% 1000%",
  animation: `${gradientKeyframes} ${times.sloth} ease infinite`,
});

// @ts-ignore
ripple.displayName = "ripple";


// background-color: $shocking-pink;
// width: 1rem; 
// height: 1rem;
// position: absolute;
// border-radius: 50%;
// transform: translateX(-100%) translateY(-100%);
// mix-blend-mode: screen;
// animation: ripple 1250ms ease-out forwards, fade 1500ms ease-out forwards;