// src/routes/index.js
import { Router } from "express";
import { router as registrationRouter } from "./registration.routes.js";

export const router = Router();

// todas as rotas de formulários ficam em /api/registrations/...
router.use("/registrations", registrationRouter);
