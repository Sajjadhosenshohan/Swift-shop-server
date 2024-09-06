const uploadPermission = require("../helper/permission");
const productModel = require("../models/productModelSchema");

const uploadProduct = async (req, res) => {
    try {
        const UserId = req.userId

        if(!uploadPermission(UserId)){
            throw new Error("Permission denied")
        }
        // console.log(req.body)
        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()

        res.status(200).json({
            data: saveProduct,
            error: false,
            success: true,
            message: "product uploaded successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = uploadProduct;
