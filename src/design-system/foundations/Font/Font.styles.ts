import styled, { css } from "styled-components";
import { getStyle, toMarginPaddingString } from "../Layouts";
import { FontSettings } from "./Font.types";
import { TextPropsBase } from "./Font";

export const Font = styled.span<FontSettings & TextPropsBase>`
  display: block;
  max-width: 100%;
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  line-height: ${({ $fontSize, $lineHeight }) => $fontSize * $lineHeight}px;
  color: ${({ color, theme }) => theme[color || "GRAY_900"]};
  text-align: ${({ $textAlign = "left" }) => $textAlign};
  ${({ m, mh, mv, mt, mr, mb, ml }) =>
    getStyle("margin", toMarginPaddingString(m, mh, mv, mt, mr, mb, ml))}
  ${({ $pre }) =>
    $pre &&
    css`
      white-space: pre-wrap;
    `}
  text-decoration: ${({ $lineThrough, underline }) =>
    $lineThrough ? "line-through" : underline ? "underline" : ""};

  ${({ $numberOfLines, $fontSize, $lineHeight }) =>
    !!$numberOfLines &&
    css`
      text-overflow: ellipsis;
      -webkit-line-clamp: ${$numberOfLines};
      overflow: hidden;
      display: -webkit-inline-box;
      -webkit-box-orient: vertical;
      max-height: ${$fontSize * $lineHeight * $numberOfLines}px;
    `}
`;
