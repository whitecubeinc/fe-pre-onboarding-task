import styled, { css } from "styled-components";
import { LayoutBase } from "./Flex";
import { getStyle } from "./Layout.utils";

type AbsoluteStyle = {
  flexDirection?: "row" | "column";
  b?: number | string;
  t?: number | string;
  l?: number | string;
  r?: number | string;
  opacity?: number;
};

export const Absolute = styled(LayoutBase)<AbsoluteStyle>`
  position: absolute;
  ${({ b, t, l, r, flexDirection, opacity }) => css`
    ${getStyle("flex-direction", flexDirection || "row")}
    ${getStyle("bottom", b)}
    ${getStyle("top", t)}
    ${getStyle("left", l)}
    ${getStyle("right", r)}
    ${getStyle("opacity", opacity)}
  `}
`;
