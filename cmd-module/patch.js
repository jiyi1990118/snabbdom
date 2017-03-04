/**
 * Created by xiyuan on 17-2-28.
 */
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
    var snabbdom = require('./snabbdom.js');
    module.exports = snabbdom.init([
        require('./modules/class').default,
        require('./modules/hero').default,
        require('./modules/style').default,
        require('./modules/eventlisteners').default
    ]);
});