// Todo
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "authMiddleware", {
    enumerable: true,
    get: function() {
        return authMiddleware;
    }
});
var _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
var _utils = require("../functions/utils");
var _server = require("../configs/server");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var authMiddleware = function(req, res, next) {
    var authHeader = req.get("Authorization");
    if (authHeader && authHeader.toLowerCase().startsWith("bearer")) {
        var token = (0, _utils.getBearerAuth)(authHeader);
        _jsonwebtoken.default.verify(token, _server.SECRET, function(err, username) {
            if (!err) {
                req.username = username;
                next();
            } else {
                req.username = null;
                res.sendStatus(401);
                next();
            }
        });
    } else {
        req.username = null;
        next();
    }
};
