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
    function updateClass(oldVnode, vnode) {
        var cur, name, elm = vnode.elm, oldClass = oldVnode.data["class"], klass = vnode.data["class"];
        if (!oldClass && !klass)
            return;
        if (oldClass === klass)
            return;
        oldClass = oldClass || {};
        klass = klass || {};
        for (name in oldClass) {
            if (!klass[name]) {
                elm.classList.remove(name);
            }
        }
        for (name in klass) {
            cur = klass[name];
            if (cur !== oldClass[name]) {
                elm.classList[cur ? 'add' : 'remove'](name);
            }
        }
    }

    exports.classModule = {create: updateClass, update: updateClass};
    exports["default"] = exports.classModule;
})