import express from "express"
import dotenv from "dotenv"
import { sequelize } from "./database/db.js"
import userRoute from "./routes/user.js"
import authRoute from "./routes/auth.js"


const app = express()

// middlewares
dotenv.config()
app.use(express.json());


// Routes
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)


// app connection
app.use("/", (req, res) => {
    res.send("server is running")
})

const main = async () => {
    try {
        await sequelize.sync(
            { force: true }
        );
        console.log("db connection is successfull")
        app.listen(process.env.PORT, () => console.log(`api is running on port: ${process.env.PORT}`))

    } catch (error) {
        console.log(`Unable to connect to the database ${error}`)
    }
}

main()