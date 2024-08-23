const express = require("express")
const router = express.Router()

const userSignUpController = require("../controller/signUp")
router.post("/signup", userSignUpController)

module.exports = router;