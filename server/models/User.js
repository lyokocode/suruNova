import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

})