const mongoose = require("mongoose")

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI,  {
            useUnifiedTopology: true,
            dbName: 'swift-shop-db' // Specify your database name here
          })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB