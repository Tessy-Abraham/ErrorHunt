const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');
//const userdata = require('../model/UserModel');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    
    var newuser = {
        "uid":req.params("uid"),
        "pwd":req.params("pwd") //Part #2 Point 10
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;