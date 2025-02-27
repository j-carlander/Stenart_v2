/**
 * Rate limiter for serving frontend when visiting a url that is not root.
 */

import rateLimit from "express-rate-limit";

export const serveLimit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
});
