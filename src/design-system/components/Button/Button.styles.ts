import { ColorKeys } from "src/design-system/colors";
import styled from "styled-components";
import { BUTTON_HEIGHT } from "./Button.constants";

type ButtonProps = {
  fill: ColorKeys;
};
const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, fill }) => theme[fill]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  word-break: keep-all;
`;

export const LargeButton = styled(Button)`
  height: ${BUTTON_HEIGHT.LARGE}px;
  padding: 0 20px;
  border-radius: 12px;
`;

export const MediumButton = styled(Button)`
  height: ${BUTTON_HEIGHT.MEDIUM}px;
  padding: 0 16px;
  border-radius: 10px;
`;

export const SmallButton = styled(Button)`
  height: ${BUTTON_HEIGHT.SMALL}px;
  padding: 0 12px;
  border-radius: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
