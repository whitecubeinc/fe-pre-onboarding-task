import { ColorKeys } from "@design-system";

export enum FontWeight {
  BOLD = 700,
  SEMIBOLD = 600,
  MEDIUM = 400,
}

export type FontSettings = {
  $fontSize: number;
  $fontWeight: FontWeight;
  $lineHeight: number;
  color?: ColorKeys;
  $textAlign?: "left" | "right" | "center";
};

export type DisplayType =
  | "40_bold_single"
  | "40_semibold_single"
  | "40_bold_multi"
  | "40_semibold_multi"
  | "32_bold_single"
  | "32_semibold_single"
  | "32_bold_multi"
  | "32_semibold_multi"
  | "28_bold_single"
  | "28_semibold_single"
  | "28_bold_multi"
  | "28_semibold_multi";

export type TitleType =
  | "24_bold_single"
  | "24_semibold_single"
  | "24_bold_multi"
  | "24_semibold_multi"
  | "20_bold_single"
  | "20_semibold_single"
  | "20_bold_multi"
  | "20_semibold_multi"
  | "18_bold_single"
  | "18_semibold_single"
  | "18_bold_multi"
  | "18_semibold_multi";

export type BodyType =
  | "16_semibold_single"
  | "16_medium_single"
  | "16_semibold_multi"
  | "16_medium_multi"
  | "14_semibold_single"
  | "14_medium_single"
  | "14_semibold_multi"
  | "14_medium_multi"
  | "12_semibold_single"
  | "12_medium_single"
  | "12_semibold_multi"
  | "12_medium_multi"
  | "10_medium_single";
