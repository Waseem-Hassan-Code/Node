import { DataTypes } from "sequelize";
import dbContext from "../../DbContext";

const Role = dbContext.define(
  "Role",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    schema: "User",
  }
);

export default Role;
