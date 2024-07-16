import { useCallback } from "react";
import { buttonColorSettings } from "./Button.constants";
import { ButtonProps } from "./Button.types";

export const useButton = (props: ButtonProps) => {
  const { type, status, text, onClick: _onClick } = props;
  const colorSetting = buttonColorSettings[type];

  const onClick = useCallback(() => {
    status === "normal" && _onClick?.();
  }, [status, _onClick]);

  const fill = colorSetting[status].background;
  const color = colorSetting[status].text;

  return {
    text,
    fill,
    color,
    onClick,
  };
};
