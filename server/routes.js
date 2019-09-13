const controller = require("./controller");

module.exports = function(app){
    app.get('/', controller.index)
    app.get('/quotes', controller.success)
};