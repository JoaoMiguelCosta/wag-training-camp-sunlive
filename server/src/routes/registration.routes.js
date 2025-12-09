// src/routes/registration.routes.js
import { Router } from "express";
import { createRegistration } from "../controllers/registration.controller.js";
import { validateRegistration } from "../middlewares/validateRequest.js";

export const router = Router();

/**
 * POST /api/registrations/:camp/:role
 * camp: "malta" | "anadia"
 * role: "gymnast" | "coach" | "family"
 */
router.post("/:camp/:role", validateRegistration, createRegistration);
