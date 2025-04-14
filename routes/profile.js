var express = require('express');
var router = express.Router();
var userModel = require('../model/user.model')
const isLoggedInUser = require('../middleware/isloggedInUser');


router.get("/:username", isLoggedInUser,  async function (req, res) {
    

    const user = await userModel.findOne({ username: req.params.username });
    res.render("profile",{user});
});
module.exports = router;