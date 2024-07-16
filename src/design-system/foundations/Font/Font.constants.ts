import {
  BodyType,
  DisplayType,
  FontSettings,
  FontWeight,
  TitleType,
} from "./Font.types";

/**
 * Display type의 font 값 setting
 */
export const DisplaySettings: { [key in DisplayType]: FontSettings } = {
  "40_bold_single": {
    $fontSize: 40,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.18,
  },
  "40_semibold_single": {
    $fontSize: 40,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.18,
  },
  "40_bold_multi": {
    $fontSize: 40,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.3,
  },
  "40_semibold_multi": {
    $fontSize: 40,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.3,
  },
  "32_bold_single": {
    $fontSize: 32,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.18,
  },
  "32_semibold_single": {
    $fontSize: 32,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.18,
  },
  "32_bold_multi": {
    $fontSize: 32,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.3,
  },
  "32_semibold_multi": {
    $fontSize: 32,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.3,
  },
  "28_bold_single": {
    $fontSize: 28,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.16,
  },
  "28_semibold_single": {
    $fontSize: 28,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.16,
  },
  "28_bold_multi": {
    $fontSize: 28,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.32,
  },
  "28_semibold_multi": {
    $fontSize: 28,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.32,
  },
};

/**
 * Title type의 font 값 setting
 */
export const TitleSettings: { [key in TitleType]: FontSettings } = {
  "24_bold_single": {
    $fontSize: 24,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.16,
  },
  "24_semibold_single": {
    $fontSize: 24,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.16,
  },
  "24_bold_multi": {
    $fontSize: 24,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.34,
  },
  "24_semibold_multi": {
    $fontSize: 24,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.34,
  },
  "20_bold_single": {
    $fontSize: 20,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.18,
  },
  "20_semibold_single": {
    $fontSize: 20,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.18,
  },
  "20_bold_multi": {
    $fontSize: 20,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.38,
  },
  "20_semibold_multi": {
    $fontSize: 20,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.38,
  },
  "18_bold_single": {
    $fontSize: 18,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.2,
  },
  "18_semibold_single": {
    $fontSize: 18,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.2,
  },
  "18_bold_multi": {
    $fontSize: 18,
    $fontWeight: FontWeight.BOLD,
    $lineHeight: 1.38,
  },
  "18_semibold_multi": {
    $fontSize: 18,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.38,
  },
};

/**
 * Body type의 font 값 setting
 */
export const BodySettings: { [key in BodyType]: FontSettings } = {
  "16_semibold_single": {
    $fontSize: 16,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.22,
  },
  "16_medium_single": {
    $fontSize: 16,
    $fontWeight: FontWeight.MEDIUM,
    $lineHeight: 1.22,
  },
  "16_semibold_multi": {
    $fontSize: 16,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.42,
  },
  "16_medium_multi": {
    $fontSize: 16,
    $fontWeight: FontWeight.MEDIUM,
    $lineHeight: 1.42,
  },
  "14_semibold_single": {
    $fontSize: 14,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.25,
  },
  "14_medium_single": {
    $fontSize: 14,
    $fontWeight: FontWeight.MEDIUM,
    $lineHeight: 1.25,
  },
  "14_semibold_multi": {
    $fontSize: 14,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.46,
  },
  "14_medium_multi": {
    $fontSize: 14,
    $fontWeight: FontWeight.MEDIUM,
    $lineHeight: 1.46,
  },
  "12_semibold_single": {
    $fontSize: 12,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.3,
  },
  "12_medium_single": {
    $fontSize: 12,
    $fontWeight: FontWeight.MEDIUM,
    $lineHeight: 1.3,
  },
  "12_semibold_multi": {
    $fontSize: 12,
    $fontWeight: FontWeight.SEMIBOLD,
    $lineHeight: 1.46,
  },
  "12_medium_multi": {
    $fontSize: 12,
    $fontWeight: FontWeight.MEDIUM,
    $lineHeight: 1.46,
  },
  "10_medium_single": {
    $fontSize: 10,
    $fontWeight: FontWeight.MEDIUM,
    $lineHeight: 1.2,
  },
};
