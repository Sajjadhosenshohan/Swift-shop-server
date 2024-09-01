const express = require("express")
const cors = require("cors")
require("dotenv").config()
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8000;
// import
const mongoose = require("mongoose");
const router = require("./routes/routes");

const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())





mongoose.connect(process.env.MONGODB_URI, { dbName: 'swift-shop-db' })
    .then(() => {
        console.log("db is connected")
    })
    .catch((err) => console.log(err))

// app.get("/", async (req, res) => {
//     res.send("server is running")
// })
app.use("/api", router)
app.get("/", async(req,res)=>{
    res.send("db is connected")
})

app.listen(port, () => {
    console.log(`SwiftShop is running on this ${port} port`)
})
