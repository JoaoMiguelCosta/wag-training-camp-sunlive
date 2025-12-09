// src/app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { router as apiRouter } from "./routes/index.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export function createApp() {
  const app = express();

  // Segurança básica e utilitários
  app.use(helmet());
  app.use(
    cors({
      origin: "*", // depois restringimos ao domínio do frontend
    })
  );
  app.use(express.json());
  app.use(morgan("dev"));

  // Rota de health-check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Rotas principais da API
  app.use("/api", apiRouter);

  // 404 + handler de erros
  app.use(notFound);
  app.use(errorHandler);

  return app;
}
