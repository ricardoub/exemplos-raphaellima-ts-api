import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';

describe('Testes unitários do controller', () => {

  describe('USUÁRIO: Método GET users', () => {
    it('Deve retornar uma lista com todos os usuários', () => {

    });
  });

  describe('USUÁRIO: Método Create', () => {
    it('Deve criar um novo usuário', () => {
      const novoUsuario = {
        id: 1,
        name: 'Novo usuario',
        email: 'novousuario@gmail.com',
        password: '1234'
      };
      const user = new User();
      return user
        .create(novoUsuario)
        .then(data => {
          expect(data.dataValues).to.have.all.keys(
            ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
          )
        });
    });
  });

  // describe('USUÁRIO: Método Update', () => {
  //   it('Deve atualizar um Usuário', () => {
  //
  //   });
  // });
  //
  // describe('USUÁRIO: Método Delete', () => {
  //   it('Deve deletar um Usuário', () => {
  //
  //   });
  // });

});
