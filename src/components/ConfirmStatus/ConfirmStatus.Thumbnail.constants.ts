import { ColorKeys } from "@design-system";
import { ConfirmStatus } from "@types";

export const SIZE = 40;

export const CONFIRM_STATUS: Record<
  ConfirmStatus,
  {
    text: string;
    color?: ColorKeys;
  }
> = {
  SUCCESS: {
    text: "성공",
    color: "SYSTEM_SUCCESS",
  },
  FAIL: {
    text: "실패",
    color: "SYSTEM_ERROR",
  },
  BEFORE_CONFIRM: {
    text: "",
  },
};
