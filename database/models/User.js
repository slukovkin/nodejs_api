import { DataTypes } from 'sequelize'
import { sequelize } from '../db_init.js'

export const User = sequelize.define('User', {
  login: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
  allowNull: false
  },
  avatarUrl: {
    type: DataTypes.STRING,
    allowNull: true
  }
},{
  timestamps: true
})
