const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    profilePicture: String
},
    { timestamps: true }
)

const userModel = mongoose.model("swift-shop-user", userSchema)

module.exports = userModel