"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var auth_1 = require("../../modules/auth/auth");
var Routes = (function () {
    //  private router: UserRoutes;
    //  private tokenRoute;
    //  private auth;
    function Routes(app, auth) {
        //    this.router = new UserRoutes();
        //this.tokenRoute = new TokenRoutes();
        //    this.auth = auth;
        //    this.getRoutes(app);
    }
    Routes.prototype.initRoutes = function (app, auth) {
        // app.route('/').get((req: Request, res: Response) => res.send('Hello, world!'));
        // app.route('/ola/:nome').get((req: Request, res: Response) => res.send(`Hello, ${req.params.nome}!`));
        app.route('/api/users/all').all(auth.autenticate()).get(routes_1.default.index);
        app.route('/api/users/create').all(auth.autenticate).post(routes_1.default.create);
        app.route('/api/users/:id').all(auth.autenticate).get(routes_1.default.findOne);
        app.route('/api/users/:id/update').all(auth.autenticate).put(routes_1.default.update);
        app.route('/api/users/:id/destroy').all(auth.autenticate).delete(routes_1.default.destroy);
        app.route('/token').post(auth_1.default.auth);
    };
    return Routes;
}());
exports.default = Routes;
