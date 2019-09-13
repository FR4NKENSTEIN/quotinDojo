const controller = require("./controller");

module.exports = function(app){
    app.get('/', controller.index)
    app.post('/quotes', controller.creator)
    app.get('/quotes', controller.success)
};