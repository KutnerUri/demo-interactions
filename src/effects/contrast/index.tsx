import { Anim } from "../../anim";
import { countdown1, countdown2, countdown3, restingStyle } from "../resting";
import { accentBorder, border, complementBorder } from "./border";
import {
  shadow01,
  shadow04,
  shadow08,
  shadow12,
  shadow18,
  shadow24,
} from "./shadow";

export const contrastAnimations: Anim[] = [
  countdown3,
  countdown2,
  countdown1,
  restingStyle,
  { style: shadow01, displayName: "shadow 01", duration: 785 },
  { style: shadow04, displayName: "shadow 04", duration: 785 },
  { style: shadow08, displayName: "shadow 08", duration: 785 },
  { style: shadow12, displayName: "shadow 12", duration: 785 },
  { style: shadow18, displayName: "shadow 18", duration: 785 },
  { style: shadow24, displayName: "shadow 24", duration: 785 },
  restingStyle,
  { style: border, displayName: "regular border", duration: 785 },
  restingStyle,
  { style: accentBorder, displayName: "accent border", duration: 785 },
  restingStyle,
  {
    style: complementBorder,
    displayName: "complementary border",
    duration: 785,
  },
];
