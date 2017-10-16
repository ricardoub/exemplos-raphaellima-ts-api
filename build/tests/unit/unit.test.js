"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
describe('Testes unitários do controller', function () {
    describe('USUÁRIO: Método GET users', function () {
        it('Deve retornar uma lista com todos os usuários', function () {
            var user = new service_1.default();
            return user
                .getAll()
                .then(function (data) {
                helpers_1.expect(data).to.be.an('array');
                helpers_1.expect(data[0]).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
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
