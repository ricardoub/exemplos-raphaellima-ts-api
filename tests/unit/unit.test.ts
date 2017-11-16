import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';

const model = require('../../server/models');

describe('Testes unitários do controller', () => {

  const defaultUser = {
    id: 1,
    name: 'Default User',
    email: 'defaultuser@email.com',
    password: '1234'
  }

  beforeEach((done) => {
    model.User.destroy({
      where: {}
    })
    .then(() => {
      model.User.create(defaultUser).then(() => {
        console.log(`Default User Created`);
        done();
      });
    })
  });

  describe('USUÁRIO: Método Create', () => {
    it('Deve criar um novo usuário', () => {
      const novoUsuario = {
        id: 2,
        name: 'Novo usuario',
        email: 'novousuario@gmail.com',
        password: '1234'
      };
      return User
        .create(novoUsuario)
        .then(data => {
          expect(data.dataValues).to.have.all.keys(
            ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
          )
        });
    });
  });

  describe('USUÁRIO: Método Update', () => {
    it('Deve atualizar um Usuário', () => {
      const usuarioAtualizado = {
        name: 'Nome Atualizado',
        email: 'atualizado@gmail.com'
      };
      return User
        .update(defaultUser.id, usuarioAtualizado)
        .then(data => {
          expect(data[0]).to.be.equal(1);
        })
    });
  });

  describe('USUÁRIO: Método GET users', () => {
    it('Deve retornar uma lista com todos os usuários', () => {
      return User
        .getAll()
        .then(data => {
          expect(data).to.be.an('array');
        })
    });
  });

  describe('USUÁRIO: Método getById', () => {
    it('Deve retornar um usuário de acordo com o ID passado', () => {
      return User
        .getById(defaultUser.id)
        .then(data => {
          expect(data).to.have.all.keys(
            ['email', 'id', 'name', 'password']
          )
        });
    });
  });

  describe('USUÁRIO: Método getByEmail', () => {
    it('Deve retornar um usuário de acordo com o email passado', () => {
      return User
        .getByEmail(defaultUser.email)
        .then(data => {
          expect(data).to.have.all.keys(
            ['email', 'id', 'name', 'password']
          )
        });
    });
  });

  describe('USUÁRIO: Método Delete', () => {
    it('Deve deletar um Usuário', () => {
      return User
        .delete(defaultUser.id)
        .then(data => {
          expect(data).to.be.equal(1);
        })
    });
  });

});
