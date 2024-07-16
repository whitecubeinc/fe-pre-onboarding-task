import React from "react";
import { ColorKeys } from "src/design-system/colors";
import { Margin } from "../Layouts";
import { BodySettings, TitleSettings } from "./Font.constants";
import * as S from "./Font.styles";
import { BodyType, TitleType } from "./Font.types";

const Title: React.FC<TitleProps> = React.memo((props: TitleProps) => {
  const { type, children, ...textProps } = props;

  return (
    <S.Font {...TitleSettings[type]} {...textProps}>
      {typeof children === "string"
        ? children.split("\n").map((text, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {text}
            </React.Fragment>
          ))
        : children}
    </S.Font>
  );
});

const Body: React.FC<BodyProps> = React.memo((props) => {
  const { type, children, ...textProps } = props;

  return (
    <S.Font {...BodySettings[type]} {...textProps}>
      {typeof children === "string"
        ? children.split("\n").map((text, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {text}
            </React.Fragment>
          ))
        : children}
    </S.Font>
  );
});

export type TextPropsBase = {
  color?: ColorKeys;
  $textAlign?: "left" | "center" | "right";
  $lineThrough?: boolean;
  underline?: boolean;
  $numberOfLines?: number;
  $flexShrink?: number;
  $pre?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Margin;

export type TitleProps = {
  type: TitleType;
} & TextPropsBase;

export type BodyProps = {
  type: BodyType;
} & TextPropsBase;

/**
 * [Foundation] Font Display | Title | Body
 *
 * @prop {ColorKeys} color text color (default: 'GRAY_900')
 * @prop {string} type
 * @prop {'left' | 'center' | 'right'} textAlign (default: 'left')
 */

export default {
  Title,
  Body,
};
