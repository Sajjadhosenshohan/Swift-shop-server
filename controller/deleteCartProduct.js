const addToCartModel = require("../models/addToCartModelSchema");


const deleteCartProduct = async (req, res) => {
    try {
        const _id = req.params._id;
        // console.log(7,_id)

        const deleteProduct = await addToCartModel.deleteOne({ _id });

        if (deleteProduct) {

            res.json({
                data: deleteProduct,
                message: "Product Deleted Successfully",
                error: false,
                success: true
            });
        }

    } catch (error) {
        console.error("Error updating product: ", error);
        res.json({
            message: error?.message || error,
            error: true,
            success: false
        });
    }
};

module.exports = deleteCartProduct;
