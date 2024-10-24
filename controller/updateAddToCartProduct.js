const addToCartModel = require("../models/addToCartModelSchema");


const updateAddToCartProduct = async (req, res) => {
    try {
        const data = req?.body;


        if (!data?._id || !data?.quantity) {
            return res.json({
                message: "Product ID and quantity are required",
                error: true,
                success: false
            });
        }

        const updateProduct = await addToCartModel.updateOne(
            { _id: data._id }, 
            { quantity: data.quantity }
        );

        // Check if the update was successful
        if (updateProduct.nModified === 0) {
            return res.json({
                message: "No product was updated. Please check the ID or quantity.",
                error: true,
                success: false
            });
        }

        res.json({
            message: "Product Updated Successfully",
            data: updateProduct,
            error: false,
            success: true
        });

    } catch (error) {
        console.error("Error updating product: ", error);
        res.json({
            message: error?.message || error,
            error: true,
            success: false
        });
    }
};

module.exports = updateAddToCartProduct;
