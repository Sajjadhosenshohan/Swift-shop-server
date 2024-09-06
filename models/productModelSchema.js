const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName: {
        type: String,
    },
    brandName: String,
    category: String,
    productImage: [],
    description: String,
    price: String,
    sellingPrice: String,

}, { timestamps: true }
)

const productModel = mongoose.model("products", productSchema)
module.exports = productModel;