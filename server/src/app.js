// src/app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import { router as apiRouter } from "./routes/index.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export function createApp() {
  const app = express();

  // 🔒 Segurança básica (headers)
  app.use(helmet());

  // 🌍 CORS – só aceita pedidos do teu front
  app.use(
    cors({
      origin: [
        "http://localhost:5173", // desenvolvimento
        // "https://o-teu-dominio-final.com", // <--- mete aqui quando tiveres o domínio
      ],
    })
  );

  // 📦 Limite de tamanho do body JSON (proteção básica)
  app.use(express.json({ limit: "200kb" }));

  // ⏱️ Rate limit – limite de pedidos por IP
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // máx. 100 pedidos / IP / janela
    standardHeaders: true,
    legacyHeaders: false,
  });

  // aplica rate-limit às rotas de API
  app.use("/api", limiter);

  // 📝 Logs
  app.use(morgan("dev"));

  // ✅ Health-check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // 🚏 Rotas principais da API
  app.use("/api", apiRouter);

  // 404 + handler de erros
  app.use(notFound);
  app.use(errorHandler);

  return app;
}
