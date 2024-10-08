const userModel = require("../models/userModelSchema");
const bcrypt = require('bcryptjs');

async function userSignUpController(req, res) {
    try {
        const { email, name, password } = req.body;

        const user = await userModel.findOne({ email })
        if (user) {
            throw new Error("user already exist")
        }
        if (!email) {
            throw new Error("please provide email")
        }
        if (!name) {
            throw new Error("please provide name")
        }
        if (!password) {
            throw new Error("please provide password")
        }

        // var salt = bcrypt.genSaltSync(10);
        // var hashPassword = await bcrypt.hashSync(password, salt);
        const hashPassword = await bcrypt.hash(password, 10);

        if (!hashPassword) {
            throw new Error("something else")
        }

        const payload = {
            ...req.body,
            role: "user",
            password: hashPassword
        }
        // console.log(payload)
        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.send({
            userSignUp: saveUser,
            success: true,
            error: false,
            message: "user created successfully"
        })
    } catch (error) {
        res.json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = userSignUpController