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
    createAuthEntry: function() {
        return _create.createAuthEntry;
    },
    createPost: function() {
        return _create.createPost;
    },
    createUser: function() {
        return _create.createUser;
    },
    deletePost: function() {
        return _delete.deletePost;
    },
    deleteUser: function() {
        return _delete.deleteUser;
    },
    getAllPosts: function() {
        return _read.getAllPosts;
    },
    getPostById: function() {
        return _read.getPostById;
    },
    getPostsByUsername: function() {
        return _read.getPostsByUsername;
    },
    getUserData: function() {
        return _read.getUserData;
    },
    updatePassword: function() {
        return _update.updatePassword;
    },
    updatePost: function() {
        return _update.updatePost;
    }
});
var _create = require("./create");
var _read = require("./read");
var _delete = require("./delete");
var _update = require("./update");
