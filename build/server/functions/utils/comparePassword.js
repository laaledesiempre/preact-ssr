"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "comparePassword", {
    enumerable: true,
    get: function() {
        return comparePassword;
    }
});
var _bcrypt = /*#__PURE__*/ _interop_require_default(require("bcrypt"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var comparePassword = function(plainTextPassword, user) {
    if (!user) return false;
    return new Promise(function(resolve, reject) {
        _bcrypt.default.compare(plainTextPassword, user.password, function(err, res) {
            err && reject(err);
            resolve(res);
        });
    });
};
