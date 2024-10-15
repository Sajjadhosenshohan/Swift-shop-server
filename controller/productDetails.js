const productModel = require("../models/productModelSchema");

const productDetails = async (req, res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId)
        console.log(product)
        res.status(200).json({
            data: product,
            error: false,
            success: true,
            message: "product details"
        })

    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = productDetails;