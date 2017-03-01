(function (factory) {
    var exports = {};

    if (typeof module === "object" && module && typeof module.exports === "object") {
        factory(exports);
        module.exports = exports;
    } else if (typeof define === "function") {
        define(factory);
    } else {
        factory(window);
    }

})(function (require, exports, module) {
    "use strict";
    exports.__esModule = true;
});
