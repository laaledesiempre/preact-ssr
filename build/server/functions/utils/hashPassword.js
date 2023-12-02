"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hashPassword", {
    enumerable: true,
    get: function() {
        return hashPassword;
    }
});
var _bcrypt = /*#__PURE__*/ _interop_require_default(require("bcrypt"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hashPassword = function(password) {
    return new Promise(function(resolve, reject) {
        _bcrypt.default.hash(password, 12, function(err, hash) {
            if (!err) {
                resolve(hash);
            }
        });
    });
};
