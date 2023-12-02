//Imports
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _preact = require("preact");
var _Main = require("../Main");
//Hydration code
(0, _preact.hydrate)((0, _preact.h)(_Main.MainHydrate), document.body) // This code compiles into build/server/client.entry.js and cointains whole app code.
;
