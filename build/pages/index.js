"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Home: function() {
        return _Home.Home;
    },
    Login: function() {
        return _Login.Login;
    },
    Post: function() {
        return _Post.Post;
    },
    Register: function() {
        return _Register.Register;
    }
});
var _Home = require("./home/Home");
var _Login = require("./login/Login");
var _Post = require("./post/Post");
var _Register = require("./register/Register");
