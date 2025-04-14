var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var userModel = require('../model/user.model');
var fs = require('fs');
var path = require('path');

router.get("/", async function(req, res) {
    let username = null;

    if (req.cookies.token) {
        try {
            const data = jwt.verify(req.cookies.token, "secret");
            username = data.username;
        } catch (err) {
            res.clearCookie("token");
        }
    }

    let user = await userModel.findOne({ username });

    // Read Templates 
    const jsonPath = path.join(__dirname, '../TemplatesData/templatesData.json');

    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).redirect("/");
        }

        const templates = JSON.parse(data);
        res.render("templates", { user, templates });
    });
});

module.exports = router;
