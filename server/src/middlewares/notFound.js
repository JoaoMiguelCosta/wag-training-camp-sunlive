// src/middlewares/notFound.js
export function notFound(req, res, next) {
  res.status(404).json({ error: "Not found" });
}
