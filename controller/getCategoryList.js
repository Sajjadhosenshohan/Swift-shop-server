const productModel = require("../models/productModelSchema");

const GetCategoryListController = async (req, res) => {
    try {
        // console.log("userId", req.userId)
        const categoryList = await productModel.distinct("category")

        const productCategory = []
        
        for(let category of categoryList){
            const product = await productModel.findOne({category})

            if(product){
                productCategory.push(product)
            }
        }

        res.status(200).json({
            data: productCategory,
            error: false,
            success: true,
            message: "category list found"
        })

        // console.log("user", user)

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = GetCategoryListController;