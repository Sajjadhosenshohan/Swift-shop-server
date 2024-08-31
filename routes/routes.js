const express = require("express")
const userSignUpController = require("../controller/signUp")
const router = express.Router()

router.post("/signup", userSignUpController)

module.exports = router;