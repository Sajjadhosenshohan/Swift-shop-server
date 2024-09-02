const userModel = require("../models/userModelSchema")

const allUserController = async (req, res) => {
    try {
        // console.log("id", req.userId)

        const data = await userModel.find()
        
        res.json({
            data,
            message: "all user data",
            error: false,
            success: true
        })
    } catch (error) {
        res.json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = allUserController