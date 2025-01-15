import { DataTypes } from "sequelize";
import dbContext from "../DbContext";

const Month = dbContext.define(
  "Month",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "Data",
  }
);

export default Month;
