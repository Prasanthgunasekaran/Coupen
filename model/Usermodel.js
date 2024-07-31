const { required } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

//Code
const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const user = mongoose.model("userdatas", userSchema)
module.exports = user;