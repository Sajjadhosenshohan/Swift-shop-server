const userModel = require("../models/userModelSchema");

const UpdateUserController = async (req, res) => {
    try {
        // const sessionUser = req.userId

        const { userId, role } = req.body
        // console.log(req.body)

        const payload = {

            ...(role && { role: role }),
        }

        const user = await userModel.findById({ _id: userId })

        // console.log("user.role", user.role)



        const updateUser = await userModel.findByIdAndUpdate(userId, payload)


        res.status(200).json({
            data: updateUser,
            error: false,
            success: true,
            message: "user role updated"
        })

        // console.log("user", user)

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = UpdateUserController;