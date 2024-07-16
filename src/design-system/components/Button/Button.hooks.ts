import { useCallback } from "react";
import { buttonColorSettings } from "./Button.constants";
import { ButtonProps } from "./Button.types";

export const useButton = (props: ButtonProps) => {
  const { type, status, text, onClick } = props;
  const colorSetting = buttonColorSettings[type];

  const handleClick = useCallback(() => {
    status === "normal" && onClick?.();
  }, [status, onClick]);

  const fill = colorSetting[status].background;
  const color = colorSetting[status].text;

  return {
    text,
    fill,
    color,
    handleClick,
  };
};
