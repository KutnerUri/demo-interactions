import { shake } from "./shake";
import { wiggle } from "./wiggle";
import { rippleOut } from "./ripple-out";
import { skew } from "./skew";
import { shiftDown, shiftUp } from "./shift";
import { grow, heartbeat, shrink } from "./resize";
import { Anim } from "../../App";
import { countdown1, countdown2, countdown3, restingStyle } from "../resting";

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
  { style: grow, displayName: "grow", duration: 1500 },
  { style: shrink, displayName: "shrink", duration: 1000 },
  restingStyle,
  { style: heartbeat, displayName: "heartbeat", duration: 3000 },
  restingStyle,
];
