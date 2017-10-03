"use strict";
exports.__esModule = true;
var Routes = (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (req, res) { return res.send('Hello, world!'); });
        app.route('/ola/:nome').get(function (req, res) { return res.send("Hello, " + req.params.nome); });
    };
    return Routes;
}());
exports["default"] = Routes;
