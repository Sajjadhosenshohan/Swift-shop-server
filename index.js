const express = require("express")
const cors = require("cors")
require("dotenv").config()

const port = process.env.PORT || 8000;
// import
const mongoose = require("mongoose");
const router = require("./routes/routes");

const app = express()
app.use(cors())
app.use(express.json())





mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, dbName: 'swift-shop-db' })
    .then(() => {
        console.log("db is connected")
    })
    .catch((err) => console.log(err))

// app.get("/", async (req, res) => {
//     res.send("server is running")
// })
app.use("/api", router)


app.listen(port, () => {
    console.log(`SwiftShop is running on this ${port} port`)
})
