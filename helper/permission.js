const userModel = require("../models/userModelSchema")

const uploadPermission = async (userId) => {
    const userRole = await userModel.findById(userId)
    if (userRole === 'admin') {
        return true
    }

    return false
}

module.exports = uploadPermission;