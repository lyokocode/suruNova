import Sequelize from "sequelize"
import pg from 'pg';
import dotenv from "dotenv"

dotenv.config()

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_OWNER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectModule: pg
})