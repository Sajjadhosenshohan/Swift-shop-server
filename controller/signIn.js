const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModelSchema');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email })
        // console.log(email)

        if (!user) {
            throw new Error("user not fount")
        }
        if (!email) {
            throw new Error("please provide email")
        }

        if (!password) {
            throw new Error("please provide password")
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if (checkPassword) {

            const tokenData = {
                _id : user._id,
                email : user.email,
            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: '1d' });
            console.log(token)

            const tokenOptions = {
                httpOnly: true,
                secure: true,
                secure: process.env.NODE_ENV === 'production',
            }
            

            res.cookie("token", token, tokenOptions).send({
                success: true,
                error: false,
                message: "user login successfully"
            })
        } else {
            throw new Error("invalid password")
        }

    } catch (error) {
        res.json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = userSignInController