var snabbdom = require('./snabbdom.js');
module.exports = snabbdom.init([
    require('./modules/class').default,
    require('./modules/hero').default,
    require('./modules/style').default,
    require('./modules/eventlisteners').default
]);