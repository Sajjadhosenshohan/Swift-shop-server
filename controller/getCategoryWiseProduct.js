const productModel = require("../models/productModelSchema");

const getCategoryWiseProductController = async (req, res) => {
    try {

        const {category} = req?.body;
        console.log(category)

        const categoryData = await productModel.find({category})


        res.status(200).json({
            data: categoryData,
            message: "category wise product getting",
            error: true,
            success: false
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = getCategoryWiseProductController
