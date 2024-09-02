const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    role: String,
    profilePicture: String
},
    { timestamps: true }
)

const userModel = mongoose.model("swift-shop-user", userSchema)
// this first parameter is collection name for db

module.exports = userModel