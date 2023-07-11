import { Anim } from "../../anim";
import { countdown1, countdown2, countdown3, restingStyle } from "../resting";
import { grow, heartbeat, pulse, shrink } from "./resize";

export const motionAnimations: Anim[] = [
  countdown3,
  countdown2,
  countdown1,
  restingStyle,
  { style: grow, displayName: "grow", duration: 1500 },
  { style: shrink, displayName: "shrink", duration: 1000 },
  restingStyle,
  { style: heartbeat, displayName: "heartbeat", duration: 3000 },
  restingStyle,
  { style: pulse, displayName: "pulse", duration: 3000 },
  restingStyle,
];
