import { DataTypes } from "sequelize";
import dbContext from "../../DbContext";
import User from "./User";

const Token = dbContext.define(
  "Token",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    schema: "User",
  }
);

User.hasOne(Token, {
  foreignKey: "userId",
  as: "token",
});

Token.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

export default Token;
