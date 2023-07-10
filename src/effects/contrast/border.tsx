import { css } from "@stitches/react";
import { theme } from "../../components/theme";

export const border = css({
  // TODO - css specificity war - would not happen in a regular project
  "div&": {
    borderColor: theme.borderColor,
  },
});

export const accentBorder = css({
  // TODO - css specificity war - would not happen in a regular project
  "div&": {
    borderColor: theme.accentColor,
  },
});

export const complementBorder = css({
  // TODO - css specificity war - would not happen in a regular project
  "div&": {
    borderColor: theme.dangerColor,
  },
});
