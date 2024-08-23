const express = require("express")
const cors = require("cors")
require("dotenv").config()

const port = process.env.PORT || 8000;
// import
const connectDB = require("./config/db")
const router = require("./routes/routes")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", router)






connectDB().then(() => {
   

    app.listen(port, () => {
        console.log(`SwiftShop is running on this ${port} port`)
    })
})