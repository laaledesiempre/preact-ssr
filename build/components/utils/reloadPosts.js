"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reloadPosts", {
    enumerable: true,
    get: function() {
        return reloadPosts;
    }
});
var _axios = /*#__PURE__*/ _interop_require_default(require("axios"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var reloadPosts = function() {
    return new Promise(function(resolve, reject) {
        _axios.default.get("./api/posts").then(function(response) {
            resolve(response.data);
        }).catch(function(err) {
            return alert(err);
        });
    });
};
