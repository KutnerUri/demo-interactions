import { Anim } from "../../anim";
import { restingStyle } from "../resting";
import { doubleBlink, shine } from "./blink";
import {
  opacityLower,
  opacityLow,
  opacityHigh,
  opacityHigher,
} from "./opacity-change";
import { hueRotate } from "./color-change";

export const changeAnimation: Anim[] = [
  restingStyle,
  { style: opacityLow, displayName: "opacity down (76%)", duration: 1500 },
  { style: opacityLower, displayName: "opacity down (61%)", duration: 1000 },
  restingStyle,
  { style: opacityHigh, displayName: "opacity up (90%)", duration: 1000 },
  { style: opacityHigher, displayName: "opacity up (100%)", duration: 1000 },
  restingStyle,
  { style: doubleBlink, displayName: "double blink", duration: 2000 },
  restingStyle,
  { style: shine, displayName: "shine", duration: 2000 },
  restingStyle,
  { style: hueRotate, displayName: "hue rotate", duration: 2000 },
  // saturation change is really non-noticeable
  // { style: unsaturate, displayName: "unsaturate", duration: 2000 },
];

export {};
