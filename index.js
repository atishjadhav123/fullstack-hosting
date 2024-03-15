const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: ".env" })


const app = express()

//middleware
app.use(express.json())
app.use(express.static("dist"))
app.use(cors({
    origin: process.env.FRONTED_URL
}))
//routes

app.use("/app/todo", require("./routes/todoRoutes"))
//404

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})

//erroe
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "Somting Went Wrong" })
})
//db
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("Server Running"))

})
