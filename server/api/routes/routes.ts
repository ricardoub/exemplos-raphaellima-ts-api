import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

  private router: UserRoutes;

  constructor() {
    this.router = new UserRoutes();
    this.tokenRoute = TokenRoutes;
  }

  initRoutes(app: Application, auth: any): void {
    // app.route('/').get((req: Request, res: Response) => res.send('Hello, world!'));
    // app.route('/ola/:nome').get((req: Request, res: Response) => res.send(`Hello, ${req.params.nome}!`));
    app.route('/api/users/all')
      .all(auth.config().autenticate()).get(this.router.index);
    app.route('/api/users/create')
      .all(auth.config().autenticate()).post(this.router.create);
    app.route('/api/users/:id')
      .all(auth.config().autenticate()).get(this.router.findOne);
    app.route('/api/users/:id/update')
      .all(auth.config().autenticate()).put(this.router.update);
    app.route('/api/users/:id/destroy')
      .all(auth.config().autenticate()).delete(this.router.destroy);

    app.route('/token').post(this.tokenRoute.auth);
  }

}

export default new Routes();
