const uploadPermission = require("../helper/permission")
const productModel = require("../models/productModelSchema")

const UpdateProduct = async (req, res) => {
    try {
        const UserId = req.userId

        if(!uploadPermission(UserId)){
            throw new Error("Permission denied")
        }
        const {_id, ...restBody} = req.body;
        const updateProduct = await productModel.findByIdAndUpdate(_id, restBody)

        console.log(updateProduct)
        

        res.status(200).json({
            data: updateProduct,
            error: false,
            success: true,
            message: "product updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = UpdateProduct;
