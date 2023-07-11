import { css } from "@stitches/react";

export const interactiveStyle = css({
  cursor: "pointer",
  "user-select": "none",

  "&:disabled": {
    cursor: "not-allowed",
  },
});
