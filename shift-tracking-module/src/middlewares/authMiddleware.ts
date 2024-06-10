// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Employee from "../models/Employee";

// Extend the express Request interface to include a custom property
declare global {
  namespace Express {
    interface Request {
      employee?: Employee; // Define the employee property
    }
  }
}

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    const employee = await Employee.findByPk(decoded.id);

    if (!employee) {
      throw new Error();
    }

    // Assign the employee to the custom property
    req.employee = employee;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export { authMiddleware };
