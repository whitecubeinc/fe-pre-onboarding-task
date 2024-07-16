const MAX_WINDOW_WIDTH = 500;
const BOTTOM_TABBAR_HEIGHT = 56;
const TOP_NAVIGATION_HEIGHT = 60;
const DEFAULT_MARGIN = 20;
const SCREEN_WIDTH =
  typeof window !== "undefined" ? Math.min(window.innerWidth, 500) : 0;
const SCREEN_HEIGHT = typeof window !== "undefined" ? window.innerHeight : 0;

export {
  BOTTOM_TABBAR_HEIGHT,
  TOP_NAVIGATION_HEIGHT,
  DEFAULT_MARGIN,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  MAX_WINDOW_WIDTH,
};
