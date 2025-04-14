var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
    res.cookie("token", "")
    res.redirect("/")
});

module.exports = router;