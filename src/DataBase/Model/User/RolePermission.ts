import { DataTypes } from "sequelize";
import dbContext from "../../DbContext";
import Role from "./Role";
import Permission from "./Permission";

const RolePermission = dbContext.define(
  "RolePermission",
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

RolePermission.belongsTo(Role, { foreignKey: "roleId" });
RolePermission.belongsTo(Permission, { foreignKey: "permissionId" });

Role.hasMany(RolePermission, { foreignKey: "roleId" });
Permission.hasMany(RolePermission, { foreignKey: "permissionId" });

export default RolePermission;
