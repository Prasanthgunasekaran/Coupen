const coupenmodel = require('../model/coupenmodel');

const create_coupen = async (req, res, next) => {
    try {
        const coupen = new coupenmodel({
            offer_name: req.body.offer_name,
            coupen_name: req.body.coupen_name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            discount_percentage: req.body.discount_percentage,
            discount_amount: req.body.discount_amount,
            is_active: req.body.is_active,
        })
        if (req.file) {
            coupen.coupen_img = req.file.path;
        }

        let coupons = await coupen.save();
        res.json({
            message: "Coupen created successfully",
            coupons
        })
    } catch (error) {
        console.log(error)
        res.json({ message: "error" })
    }
}
module.exports = { create_coupen };