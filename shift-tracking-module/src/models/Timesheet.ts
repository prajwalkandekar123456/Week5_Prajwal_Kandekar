// src/models/Timesheet.ts
/*
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Employee from "./Employee";
import Shift from "./Shift";

class Timesheet extends Model {
  public id!: string;
  public employeeId!: string;
  public shiftId!: string;
  public projectName!: string;
  public taskName!: string;
  public fromDate!: Date;
  public toDate!: Date;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Timesheet.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    shiftId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fromDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    toDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "timesheets",
  }
);

// Define associations
Timesheet.belongsTo(Employee, { foreignKey: "employeeId" });
Employee.hasMany(Timesheet, { foreignKey: "employeeId" });

Timesheet.belongsTo(Shift, { foreignKey: "shiftId" });
Shift.hasMany(Timesheet, { foreignKey: "shiftId" });

export default Timesheet;
*/
// src/models/Timesheet.ts
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Timesheet extends Model {
  public id!: string;
  public employeeId!: string;
  public shiftId!: string;
  public projectName!: string;
  public taskName!: string;
  public fromDate!: Date;
  public toDate!: Date;
}

Timesheet.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    shiftId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fromDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    toDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Timesheet",
  }
);

export default Timesheet;
