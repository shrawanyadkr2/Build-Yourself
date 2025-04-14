var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var userModel = require('../model/user.model');


router.get("/", async (req, res) => {
    let username = null;

    if (req.cookies.token) {
        try {
            const data = jwt.verify(req.cookies.token, "secret");
            username = data.username;
        } catch (err) {
            res.clearCookie("token");
        }
    }

    let user = await userModel.findOne({username})
    res.render("landingpage", {user});
});

module.exports = router;