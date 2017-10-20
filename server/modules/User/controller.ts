import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import User from './service';

class UserController {

  private UserService: User;

  constructor(){
    this.UserService = new User();
  }

  getAll(req: Request, res: Response) {
    this.UserService
      .getAll()
      .then(data => {
        res.status(HTTPStatus.OK).json({payload: data});
      })
      .catch(err => {
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR)
          .json({payload: 'Erro ao buscar todos usuários'});
      });
  }

  getById(req: Request, res: Response) {
    res.status(HTTPStatus.OK).json({
      message: 'OK'
    });
  }

  createUser(req: Request, res: Response) {
    res.status(HTTPStatus.OK).json({
      message: 'OK'
    });
  }

  updateUser(req: Request, res: Response) {
    res.status(HTTPStatus.OK).json({
      message: 'OK'
    });
  }

  deleteUser(req: Request, res: Response) {
    res.status(HTTPStatus.OK).json({
      message: 'OK'
    });
  }

}

export default UserController;
