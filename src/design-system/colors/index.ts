export const Colors = {
  PRIMARY_500: "#FF4343",
  PRIMARY_400: "#FF6E6E",
  PRIMARY_300: "#FF9999",
  PRIMARY_200: "#FFCCCC",
  PRIMARY_100: "#FFEDED",
  PRIMARY_50: "#FFEAED",

  GRAY_900: "#111111",
  GRAY_800: "#333333",
  GRAY_700: "#555555",
  GRAY_600: "#777777",
  GRAY_500: "#AAAAAA",
  GRAY_400: "#CCCCCC",
  GRAY_300: "#DDDDDD",
  GRAY_200: "#EEEEEE",
  GRAY_100: "#F5F5F5",
  GRAY_50: "#FAFAFA",

  BASIC_BLACK: "#000000",
  BASIC_WHITE: "#FFFFFF",

  SYSTEM_ERROR: "#BF0000",
  SYSTEM_SUCCESS: "#1FB881",
};

export type ColorType = typeof Colors;
export type ColorKeys = keyof ColorType;
