import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

  private router: UserRoutes;
  private tokenRoute;

  constructor() {
    this.router = new UserRoutes();
    this.tokenRoute = new TokenRoutes();
  }

  initRoutes(app: Application, auth: any): void {
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
  }

}

export default new Routes();
