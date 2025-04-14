var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

function isLoggedInUser (req, res, next){
    let token = req.cookies.token;
    
        if(!token) 
           { 
            return res.redirect("/login");
           }
            let data = jwt.verify(req.cookies.token, "secret");
            req.user = data;
            next();
}

module.exports = isLoggedInUser;