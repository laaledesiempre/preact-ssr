// Imports:
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _compression = /*#__PURE__*/ _interop_require_default(require("compression"));
var _preactrendertostring = /*#__PURE__*/ _interop_require_default(require("preact-render-to-string"));
var _preact = require("preact");
var _auth = require("./middlewares/auth");
var _database = require("./routers/database");
var _api = require("./routers/api");
var _cookieparser = /*#__PURE__*/ _interop_require_default(require("cookie-parser"));
var _server = require("./configs/server.js");
var _Main = require("../Main");
var _Layout = require("./Layout");
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
// App
var app = (0, _express.default)();
//Middlewares
app.use((0, _compression.default)());
app.use(_express.default.static("".concat(__dirname, "/../css"))) //This one serves css
;
app.use(_auth.authMiddleware);
app.use(_express.default.json());
app.use((0, _cookieparser.default)());
//Routers
app.use("/db", _database.dbRouter);
app.use("/api", _api.apiRouter);
//Hydration Endpoint
app.get("/client.js", function(req, res) {
    res.sendFile("./bundle.js", {
        root: __dirname
    });
});
//App Endpoint
app.get("/*", function() {
    var _ref = _async_to_generator(function(req, res) {
        return _ts_generator(this, function(_state) {
            res.send("<!DOCTYPE html>" + (0, _preactrendertostring.default)(/*#__PURE__*/ (0, _preact.h)(_Layout.Layout, {
                title: req.url,
                location: req.url
            }, /*#__PURE__*/ (0, _preact.h)(_Main.Main, null))));
            return [
                2
            ];
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
//App Start
app.listen(_server.APP_PORT, console.log("server on port ".concat(_server.APP_PORT)));
