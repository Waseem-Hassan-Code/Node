import { DataTypes } from "sequelize";
import dbContext from "../../DbContext";
import User from "./User";
import Role from "./Role";

const UserRole = dbContext.define(
  "UserRole",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    schema: "User",
  }
);

UserRole.belongsTo(User, { foreignKey: "userId" });
UserRole.belongsTo(Role, { foreignKey: "roleId" });

User.hasMany(UserRole, { foreignKey: "userId" });
Role.hasMany(UserRole, { foreignKey: "roleId" });

export default UserRole;
