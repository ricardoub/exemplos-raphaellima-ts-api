"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = (function () {
    function Routes() {
    }
    Routes.prototype.initRoutes = function (app, auth) {
        // app.route('/').get((req: Request, res: Response) => res.send('Hello, world!'));
        // app.route('/ola/:nome').get((req: Request, res: Response) => res.send(`Hello, ${req.params.nome}!`));
        app.route('/api/users/all')
            .all(this.auth.autenticate()).get(this.router.index);
        app.route('/api/users/create')
            .all(this.auth.autenticate()).post(this.router.create);
        app.route('/api/users/:id')
            .all(this.auth.autenticate()).get(this.router.findOne);
        app.route('/api/users/:id/update')
            .all(this.auth.autenticate()).put(this.router.update);
        app.route('/api/users/:id/destroy')
            .all(this.auth.autenticate()).delete(this.router.destroy);
        app.route('/token').post(this.tokenRoute.auth);
    };
    return Routes;
}());
exports.default = new Routes();
