import { ButtonColorSetting, ButtonType } from "./Button.types";

export const buttonColorSettings: { [key in ButtonType]: ButtonColorSetting } =
  {
    primary_fill: {
      normal: { background: "PRIMARY_500", text: "BASIC_WHITE" },
      disabled: { background: "GRAY_300", text: "GRAY_500" },
    },

    gray_900_fill: {
      normal: { background: "GRAY_900", text: "BASIC_WHITE" },
      disabled: { background: "GRAY_300", text: "GRAY_500" },
    },

    white_fill: {
      normal: { background: "BASIC_WHITE", text: "GRAY_900" },
      disabled: { background: "GRAY_300", text: "GRAY_500" },
    },
  };

export const BUTTON_HEIGHT = {
  LARGE: 52,
  MEDIUM: 46,
  SMALL: 34,
};
