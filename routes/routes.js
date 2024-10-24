const express = require("express")
const userSignUpController = require("../controller/signUp")
const userSignInController = require("../controller/signIn")
const authToken = require("../middleware/authToken")
const userDetailsController = require("../controller/userDetails")
const userLogout = require("../controller/userLogout")
const allUserController = require("../controller/allUser")
const UpdateUserController = require("../controller/UpdateUser")
const uploadProduct = require("../controller/uploadProduct")
const showAllProduct = require("../controller/showAllProduct")
const UpdateProduct = require("../controller/UpdateProduct")
const GetCategoryListController = require("../controller/getCategoryList")

const getCategoryWiseProductController = require("../controller/getCategoryWiseProduct")
const productDetails = require("../controller/productDetails")
const addToCartController = require("../controller/addToCartController")
const countAddToCartProduct = require("../controller/countAddToCartProduct")
const updateAddToCartProduct = require("../controller/updateAddToCartProduct")
const deleteCartProduct = require("../controller/deleteCartProduct")

const router = express.Router()

router.post("/signup", userSignUpController)
router.post("/signIn", userSignInController)
router.get("/user-details", authToken, userDetailsController)
router.get("/logout", userLogout)
router.get("/all-user", authToken, allUserController)
router.post("/update-user", authToken, UpdateUserController)
router.post("/upload-product", authToken, uploadProduct)
router.get("/get-all-product", showAllProduct)
router.put("/update-product", authToken, UpdateProduct)
router.get("/get-category-product", GetCategoryListController)
router.post("/get-category-wise-product", getCategoryWiseProductController)
router.post("/product-details", productDetails)

// add to cart
router.post("/addToCart",authToken,addToCartController)
router.get("/AddToCartData",authToken,countAddToCartProduct)
router.post("/updateCartQuantity",authToken, updateAddToCartProduct);
router.delete("/deleteCartProduct/:_id",authToken,deleteCartProduct);



module.exports = router;