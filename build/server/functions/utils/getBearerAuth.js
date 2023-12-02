/**
 * Extraxts token from a Brearer string
 *
 * @param {bearerString} string - string with bearer syntax authentication.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getBearerAuth", {
    enumerable: true,
    get: function() {
        return getBearerAuth;
    }
});
var getBearerAuth = function(bearerString) {
    return bearerString.split(" ")[1];
};
