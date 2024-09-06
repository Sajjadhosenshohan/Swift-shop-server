const productModel = require("../models/productModelSchema");

const showAllProduct = async (req, res) => {
    try {
        const saveProduct = await productModel.find()

        res.status(200).json({
            data: saveProduct,
            error: false,
            success: true,
            message: "get products"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = showAllProduct;
