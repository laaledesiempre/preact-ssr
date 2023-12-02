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
    updatePassword: function() {
        return updatePassword;
    },
    updatePost: function() {
        return updatePost;
    }
});
var _db = require("../../db");
var _queries = require("../../db/queries");
var _utils = require("../utils");
var updatePassword = function(newPassword, userId) {
    _db.db.run(_queries.UPDATE_PASSWORD_QUERY, [
        newPassword,
        userId
    ], function(e) {
        (0, _utils.handleError)(e);
    });
};
var updatePost = function(newContent, postId) {
    _db.db.run(_queries.UPDATE_POST_QUERY, [
        newContent,
        postId
    ], function(e) {
        (0, _utils.handleError)(e);
    });
};
