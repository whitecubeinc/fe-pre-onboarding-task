import { ColorKeys } from "@design-system";
import * as S from "./Button.styles";
import { BodyType } from "src/design-system/foundations/Font/Font.types";
import { CSSProperties } from "react";

export type ButtonSize = "Large" | "Medium" | "Small";

export type ButtonSetting = {
  [key in ButtonSize]: {
    ButtonComponent:
      | typeof S.LargeButton
      | typeof S.MediumButton
      | typeof S.SmallButton;
    fontType: BodyType;
  };
};

export type ButtonType = "primary_fill" | "gray_900_fill" | "white_fill";

export type ButtonStatus = "normal" | "disabled";

type Colors = { background: ColorKeys; text: ColorKeys };

export type ButtonColorSetting = { [key in ButtonStatus]: Colors };

export type ButtonProps = {
  type: ButtonType;
  status: ButtonStatus;
  text: string;
  onClick?: () => void;
  style?: CSSProperties;
};
