import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

//  private router: UserRoutes;
//  private tokenRoute;
//  private auth;

  constructor(app: Application, auth: any) {
//    this.router = new UserRoutes();
    //this.tokenRoute = new TokenRoutes();
//    this.auth = auth;
//    this.getRoutes(app);
  }

  initRoutes(app: Application, auth: any): void {
    // app.route('/').get((req: Request, res: Response) => res.send('Hello, world!'));
    // app.route('/ola/:nome').get((req: Request, res: Response) => res.send(`Hello, ${req.params.nome}!`));
    app.route('/api/users/all').all(auth.autenticate()).get(UserRoutes.index);
    app.route('/api/users/create').all(auth.autenticate).post(UserRoutes.create);
    app.route('/api/users/:id').all(auth.autenticate).get(UserRoutes.findOne);
    app.route('/api/users/:id/update').all(auth.autenticate).put(UserRoutes.update);
    app.route('/api/users/:id/destroy').all(auth.autenticate).delete(UserRoutes.destroy);

    app.route('/token').post(TokenRoutes.auth);
  }

}

export default Routes;
