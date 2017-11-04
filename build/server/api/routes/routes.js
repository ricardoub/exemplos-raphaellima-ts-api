"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var auth_1 = require("../../modules/auth/auth");
var Routes = (function () {
    function Routes() {
        this.router = new routes_1.default();
        this.tokenRoute = new auth_1.default();
    }
    Routes.prototype.initRoutes = function (app, auth) {
        // app.route('/').get((req: Request, res: Response) => res.send('Hello, world!'));
        // app.route('/ola/:nome').get((req: Request, res: Response) => res.send(`Hello, ${req.params.nome}!`));
        app.route('/api/users/all')
            .all(auth.autenticate()).get(this.router.index);
        app.route('/api/users/create')
            .all(auth.autenticate()).post(this.router.create);
        app.route('/api/users/:id')
            .all(auth.autenticate()).get(this.router.findOne);
        app.route('/api/users/:id/update')
            .all(auth.autenticate()).put(this.router.update);
        app.route('/api/users/:id/destroy')
            .all(auth.autenticate()).delete(this.router.destroy);
        app.route('/token').post(this.tokenRoute.auth);
    };
    return Routes;
}());
exports.default = new Routes();
