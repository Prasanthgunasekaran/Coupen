const { required } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const coupenmodel = new schema({
    offer_name: {
        type: String,
        required: true
    },
    coupen_name: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    discount_percentage: {
        type: Number,
        required: true
    },
    discount_amount: {
        type: Number,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true
    }


}, { timestamp: true })
const user = mongoose.model("coupons", coupenmodel)
module.exports = user;