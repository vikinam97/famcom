const User = require("./user.model");

module.exports = {
    create: ({
        firstName,
        lastName,
        email,
        password,
        phone,
        state,
        city,
        gender,
        profilePic
    }) => {
        return User.create({
            firstName,
            lastName,
            email,
            password,
            phone,
            state,
            city,
            gender,
            profilePic
        })
    },

    info: (userId) => {
        return User.findOne({
            _id: userId
        });
    }
}