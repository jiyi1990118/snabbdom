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
    var h_1 = require("./h");

    function copyToThunk(vnode, thunk) {
        thunk.elm = vnode.elm;
        vnode.data.fn = thunk.data.fn;
        vnode.data.args = thunk.data.args;
        thunk.data = vnode.data;
        thunk.children = vnode.children;
        thunk.text = vnode.text;
        thunk.elm = vnode.elm;
    }

    function init(thunk) {
        var cur = thunk.data;
        var vnode = cur.fn.apply(undefined, cur.args);
        copyToThunk(vnode, thunk);
    }

    function prepatch(oldVnode, thunk) {
        var i, old = oldVnode.data, cur = thunk.data;
        var oldArgs = old.args, args = cur.args;
        if (old.fn !== cur.fn || oldArgs.length !== args.length) {
            copyToThunk(cur.fn.apply(undefined, args), thunk);
        }
        for (i = 0; i < args.length; ++i) {
            if (oldArgs[i] !== args[i]) {
                copyToThunk(cur.fn.apply(undefined, args), thunk);
                return;
            }
        }
        copyToThunk(oldVnode, thunk);
    }

    exports.thunk = function thunk(sel, key, fn, args) {
        if (args === undefined) {
            args = fn;
            fn = key;
            key = undefined;
        }
        return h_1.h(sel, {
            key: key,
            hook: {init: init, prepatch: prepatch},
            fn: fn,
            args: args
        });
    };
    exports["default"] = exports.thunk;
})