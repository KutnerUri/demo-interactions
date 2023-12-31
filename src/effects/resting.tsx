import { css } from "@stitches/react";
import { Anim } from "../anim";

export const restingStyle: Anim = {
  style: css({}),
  displayName: "resting",
  duration: 1000,
};

export const shortRest: Anim = {
  style: css({}),
  displayName: "resting",
  duration: 500,
};

export const countdown3 = { style: css({}), displayName: "3" };
export const countdown2 = { style: css({}), displayName: "2" };
export const countdown1 = { style: css({}), displayName: "1" };
