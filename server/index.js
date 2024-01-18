import express from "express"
import dotenv from "dotenv"


const app = express()
// middlewares
dotenv.config()


app.use("/", (req, res) => {
    res.send("server is running")
})

const main = async () => {
    try {
        app.listen(process.env.PORT, () => console.log(`api is running on port: ${process.env.PORT}`))

    } catch (error) {
        console.log(`Unable to connect to the database ${error}`)
    }
}

main()