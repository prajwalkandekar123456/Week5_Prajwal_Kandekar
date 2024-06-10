// src/routes/timesheetRoutes.ts
import express from "express";
import { createTimesheetEntryController } from "../controllers/timesheetController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// Apply authMiddleware to routes that require authentication
router.post("/timesheets", authMiddleware, createTimesheetEntryController);

export default router;
