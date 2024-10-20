const addToCartModel = require("../models/addToCartModelSchema")

const countAddToCartProduct = async(req,res)=>{
    try{
        const userId = req?.userId

        const count = await addToCartModel.countDocuments({
            userId : userId
        })

        const product = await addToCartModel.find({userId}).populate("productId")

        

        res.json({
            data : {
                AddedProduct: product,
                count : count
            },
            message : "ok",
            error : false,
            success : true
        })
    }catch(error){
        res.json({
            message : error.message || error,
            error : false,
            success : false,
        })
    }
}

module.exports = countAddToCartProduct