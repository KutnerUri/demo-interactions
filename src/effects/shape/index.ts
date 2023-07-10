import { countdown1, countdown2, countdown3, restingStyle } from "../resting";

import { Anim } from "../../anim";
import { circle, medium, pointy, rounded, sharp, very } from "./radius";

export const shapeAnimations: Anim[] = [
  countdown1,
  countdown2,
  countdown3,
  restingStyle,
  { style: sharp, displayName: "sharp (2px)", duration: 2000 },
  { style: rounded, displayName: "rounded (1em)", duration: 2000 },
  { style: medium, displayName: "rounded (0.5em)", duration: 2000 },
  { style: very, displayName: "rounded (1em)", duration: 2000 },
  { style: circle, displayName: "circle", duration: 2000 },
];
