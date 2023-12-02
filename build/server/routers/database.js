"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dbRouter", {
    enumerable: true,
    get: function() {
        return dbRouter;
    }
});
var _index = require("../functions/database/index.js");
var _constants = require("../configs/constants");
var _express = require("express");
var _server = require("../configs/server.js");
var _hashPassword = require("../functions/utils/hashPassword.js");
var _comparePassword = require("../functions/utils/comparePassword.js");
var _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var dbRouter = (0, _express.Router)();
// Creation endpoints
dbRouter.post("/create/post", function(req, res) {
    var content = req.body.content;
    var username = req.username;
    username && (0, _index.createPost)(username, content);
    res.send("Data sent");
});
dbRouter.post("/create/user", function() {
    var _ref = _async_to_generator(function(req, res) {
        var _req_body, username, password, hashedPassword;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _req_body = req.body, username = _req_body.username, password = _req_body.password;
                    return [
                        4,
                        (0, _hashPassword.hashPassword)(password)
                    ];
                case 1:
                    hashedPassword = _state.sent();
                    (0, _index.createUser)(username, hashedPassword, _constants.ROLES.USER);
                    res.send("Data sent to create user");
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
// Login endpoint
dbRouter.post("/login", function() {
    var _ref = _async_to_generator(function(req, res) {
        var _req_body, username, password, user, passwordCompar, token;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _req_body = req.body, username = _req_body.username, password = _req_body.password;
                    return [
                        4,
                        (0, _index.getUserData)(username)
                    ];
                case 1:
                    user = _state.sent();
                    return [
                        4,
                        (0, _comparePassword.comparePassword)(password, user)
                    ];
                case 2:
                    passwordCompar = _state.sent();
                    if (passwordCompar) {
                        token = _jsonwebtoken.default.sign(username, _server.SECRET);
                        res.json({
                            token: token
                        });
                    } else {
                        res.sendStatus(401);
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
// Delete enpoints
dbRouter.delete("/delete/post/:id", function() {
    var _ref = _async_to_generator(function(req, res) {
        var _req_params, post_id, post;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _req_params = req.params, post_id = _req_params.id;
                    return [
                        4,
                        (0, _index.getPostById)(post_id)
                    ];
                case 1:
                    post = _state.sent();
                    if (post.username === req.username) {
                        (0, _index.deletePost)(post_id);
                        res.sendStatus(200);
                    } else {
                        res.sendStatus(401);
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
// Put/Patch endpoints
dbRouter.put("/change/post/:id", function() {
    var _ref = _async_to_generator(function(req, res) {
        var content, _req_params, post_id, post;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    content = req.body.content;
                    _req_params = req.params, post_id = _req_params.id;
                    return [
                        4,
                        (0, _index.getPostById)(post_id)
                    ];
                case 1:
                    post = _state.sent();
                    post && post.username === req.username ? (0, _index.updatePost)(content, post_id) : res.sendStatus(401);
                    res.sendStatus(200);
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
// Username getter endpoint
dbRouter.get("/info", function(req, res) {
    res.json({
        username: req.username
    });
});
