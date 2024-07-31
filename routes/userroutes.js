const express = require('express');
const router = express.Router();
const upload = require("../middleware/coupenmiddleware");

const usercontroller = require('../Controller/usercontroller');

const couponcontroller = require('../Controller/coupencontroller');

//validation
const { adduservalidate } = require('../validation/uservalidate');

const { coupen_joi } = require('../validation/coupenvalidaton')


router.post('/adduser',adduservalidate, usercontroller.create_user);

router.get('/getuser', usercontroller.get_user);

router.put('/update', usercontroller.update_user);

router.delete('/deleteuser', usercontroller.delete_user);

router.get('/getone', usercontroller.getone_user);

router.post('/coupencreate', upload.any('coupen_img'), couponcontroller.create_coupen);

module.exports = router;