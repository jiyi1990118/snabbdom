(function (factory) {
    if (typeof define === "function") {
        define(factory);
    } else {
        window.vdom=factory
    }
})(require('./snabbdom.bundle'));
