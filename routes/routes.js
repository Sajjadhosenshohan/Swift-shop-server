const express = require("express")
const userSignUpController = require("../controller/signUp")
const userSignInController = require("../controller/signIn")
const authToken = require("../middleware/authToken")
const userDetailsController = require("../controller/userDetails")
const userLogout = require("../controller/userLogout")
const allUserController = require("../controller/allUser")
const UpdateUserController = require("../controller/UpdateUser")
const router = express.Router()

router.post("/signup", userSignUpController)
router.post("/signIn", userSignInController)
router.get("/user-details", authToken, userDetailsController)
router.get("/logout", userLogout)
router.get("/all-user", authToken,allUserController)
router.post("/update-user", authToken,UpdateUserController)

module.exports = router;