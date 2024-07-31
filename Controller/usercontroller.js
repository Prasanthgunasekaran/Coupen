const usermodel = require('../model/Usermodel');

const create_user = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const newuser = new usermodel({ name, email, phone, password });
        await newuser.save()
        res.json({ message: "User Created" })

    } catch (error) {
        console.log(error)
        res.json({ message: "error" })
    }
}

// const get_user = async (req, res) => {
//     try {
//         const getuser = await usermodel.find();
//         res.json(getuser);
//     } catch (error) {
//         console.log(error);
//         res.json({ message: "error" })
//     }
// }
const get_user = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 5; // Default to 10 items per page if not provided
        const skip = (page - 1) * limit;

        const getuser = await usermodel.find().skip(skip).limit(limit);
        const total = await usermodel.countDocuments();

        res.json({
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            data: getuser
        });
    } catch (error) {
        console.log(error);
        res.json({ message: "error" });
    }
};

const update_user = async (req, res) => {
    try {
        const userId = req.body.userId;
        let updateuser = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        }
        await usermodel.findByIdAndUpdate(userId, { $set: updateuser });
        res.json({ message: "User Updated" });
    }
    catch (error) {
        console.log(error);
        res.json({ message: "error" });
    }
}

const delete_user = async (req, res) => {
    try {
        const userId = req.body.userId;
        await usermodel.findByIdAndDelete(userId);
        res.json({ message: "User Deleted" })
    } catch {
        console.log(error);
        res.json({ message: "error" })
    }
}

const getone_user = async (req, res) => {
    try {
        const userId = req.body.userId;
        const oneemp = await usermodel.findById(userId);
        res.json(oneemp);

    } catch (error) {
        console.log(error);
        res.json({ message: "error" });
    }
}


module.exports = { create_user, get_user, update_user, delete_user, getone_user };