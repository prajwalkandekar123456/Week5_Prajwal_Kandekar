// src/controllers/authController.ts
import { Request, Response } from "express";
import { login } from "../services/authService";

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, employee } = await login(email, password);
    res.json({ token, employee });
  } catch (error: any) {
    if (error instanceof Error) {
      // If error is of type Error, handle it appropriately
      res.status(401).json({ message: error.message });
    } else {
      // Handle other types of errors
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export { loginController };
