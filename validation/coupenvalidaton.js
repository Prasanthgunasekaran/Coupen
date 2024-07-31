const joi = require("joi");

const coupenuser = joi.object({
    offer_name: joi.string().required(),
    coupen_name: joi.string().required(),
    start_date: joi.string().required(),
    end_date: joi.string().required(),
    discount_percentage: joi.number().min(10).max(100).required(),
    discount_amount: joi.number().min(10).max(100).required(),
    is_active: joi.boolean().required()
});

const coupen_joi = async (req, res) => {
    try {
        await adduserjoi.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
}

module.exports = { coupen_joi };