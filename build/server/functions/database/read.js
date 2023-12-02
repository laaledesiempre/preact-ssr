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
    getAllPosts: function() {
        return getAllPosts;
    },
    getPostById: function() {
        return getPostById;
    },
    getPostsByUsername: function() {
        return getPostsByUsername;
    },
    getUserData: function() {
        return getUserData;
    }
});
var _db = require("../../db");
var _queries = require("../../db/queries");
var getAllPosts = function() {
    return new Promise(function(resolve, _reject) {
        _db.db.all(_queries.GET_ALL_POSTS_QUERY, [], function(_e, rows) {
            resolve(rows);
        });
    });
};
var getUserData = function(username) {
    return new Promise(function(resolve, _reject) {
        _db.db.get(_queries.GET_USER_DATA_QUERY, [
            username
        ], function(_e, row) {
            resolve(row);
        });
    });
};
var getPostById = function(id) {
    return new Promise(function(resolve, _reject) {
        _db.db.get(_queries.GET_POST_BY_ID_QUERY, [
            id
        ], function(_e, row) {
            resolve(row);
        });
    });
};
var getPostsByUsername = function(username) {
    return new Promise(function(resolve, _reject) {
        _db.db.get(_queries.GET_POST_BY_USERNAME_QUERY, [
            username
        ], function(_e, rows) {
            resolve(rows);
        });
    });
};
