import { DataTypes } from "sequelize"
import { sequelize } from "../db_init.js"

export const Good = sequelize.define(
  "Good",
  {
    code: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    article: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qty: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    cross: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
)
