// src/models/Shift.ts

import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Shift extends Model {
  public id!: number;
  public startTime!: Date;
  public endTime!: Date;
  public actualHours!: number;

  // Define model attributes
  public static initializeModel(): void {
    Shift.init(
      {
        startTime: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        endTime: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        actualHours: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Shift",
      }
    );
  }
}

// Initialize Shift model
Shift.initializeModel();

export default Shift;
