// src/controllers/timesheetController.ts
import { Request, Response } from "express";
import { createTimesheetEntry } from "../services/timesheetService";

const createTimesheetEntryController = async (req: Request, res: Response) => {
  try {
    const { shiftId, projectName, taskName, fromDate, toDate } = req.body;
    const employeeId = req.employee?.id; // Optional chaining here
    if (!employeeId) {
      throw new Error("Employee ID not found in request");
    }
    const timesheet = await createTimesheetEntry(
      employeeId,
      shiftId,
      projectName,
      taskName,
      new Date(fromDate),
      new Date(toDate)
    );
    res.status(201).json(timesheet);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { createTimesheetEntryController };
