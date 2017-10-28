import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

  private router: UserRoutes;
  private tokenRoute;
  private auth;

  constructor(app: Application, auth: any) {
    this.router = new UserRoutes();
    this.tokenRoute = new TokenRoutes();
    this.auth = auth;
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
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
  } 

}

export default Routes;
