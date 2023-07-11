import { Anim } from "../../anim";
import { countdown1, countdown2, countdown3, restingStyle } from "../resting";
import { rippleOut } from "./ripple-out";
import { shake } from "./shake";
import { shiftDown, shiftUp } from "./shift";
import { skew } from "./skew";
import { wiggle } from "./wiggle";

export const motionAnimations: Anim[] = [
  countdown3,
  countdown2,
  countdown1,
  restingStyle,
  { style: shiftUp, displayName: "shift up", duration: 1000 },
  { style: shiftDown, displayName: "shift down", duration: 2000 },
  restingStyle,
  { style: shake, displayName: "shake", duration: 2000 },
  restingStyle,
  { style: skew, displayName: "skew", duration: 2000 },
  restingStyle,
  { style: wiggle, displayName: "wiggle", duration: 2000 },
  restingStyle,
  { style: rippleOut, displayName: "ripple out", duration: 3000 },
  restingStyle,
];
