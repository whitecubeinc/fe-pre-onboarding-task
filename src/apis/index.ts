import { setupWorker } from "msw/browser";
import { handlers } from './challenge';

export const worker = setupWorker(
  ...handlers
);