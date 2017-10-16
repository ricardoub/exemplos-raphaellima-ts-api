"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
describe('Testes unitários do controller', function () {
    // describe('USUÁRIO: Método Create', () => {
    //   it('Deve criar um novo usuário', () => {
    //     const novoUsuario = {
    //       id: 1,
    //       name: 'Novo usuario',
    //       email: 'novousuario@gmail.com',
    //       password: '1234'
    //     };
    //     const user = new User();
    //     return user
    //       .create(novoUsuario)
    //       .then(data => {
    //         expect(data.dataValues).to.have.all.keys(
    //           ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
    //         )
    //       });
    //   });
    // });
    // describe('USUÁRIO: Método GET users', () => {
    //   it('Deve retornar uma lista com todos os usuários', () => {
    //     const user = new User();
    //     return user
    //       .getAll()
    //       .then(data => {
    //         expect(data).to.be.an('array');
    //         expect(data[0]).to.have.all.keys(
    //           ['email', 'id', 'name', 'password']
    //         )
    //       })
    //   });
    // });
    // describe('USUÁRIO: Método Update', () => {
    //   it('Deve atualizar um Usuário', () => {
    //     const usuarioAtualizado = {
    //       name: 'Nome Atualizado',
    //       email: 'atualizado@gmail.com'
    //     };
    //     const user = new User();
    //     return user
    //       .update(1, usuarioAtualizado)
    //       .then(data => {
    //         expect(data[0]).to.be.equal(1);
    //       })
    //   });
    // });
    describe('USUÁRIO: Método getById', function () {
        it('Deve retornar um usuário de acordo com o ID passado', function () {
            var user = new service_1.default();
            return user
                .getById(1)
                .then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    // describe('USUÁRIO: Método Delete', () => {
    //   it('Deve deletar um Usuário', () => {
    //     const user = new User();
    //     return user
    //       .delete(1)
    //       .then(data => {
    //         expect(data).to.be.equal(1);
    //       })
    //   });
    // });
});
