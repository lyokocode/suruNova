import express from "express"
import dotenv from "dotenv"
import { sequelize } from "./database/db.js"
import userRoute from "./routes/user.js"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express()

// middlewares
dotenv.config()
app.use(express.json());
app.use(cookieParser());
app.use(cors())


// Routes
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)


// app connection
app.use("/", (req, res) => {
    res.send("server is running")
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// error handling
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

const main = async () => {
    try {
        await sequelize.sync(
            // { force: true }
        );
        console.log("db connection is successfull")
        app.listen(process.env.PORT, () => console.log(`api is running on port: ${process.env.PORT}`))

    } catch (error) {
        console.log(`Unable to connect to the database ${error}`)
    }
}

main()