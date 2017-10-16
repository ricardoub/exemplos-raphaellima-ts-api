"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
describe('Testes unitários do controller', function () {
    describe('USUÁRIO: Método GET users', function () {
        it('Deve retornar uma lista com todos os usuários', function () {
        });
    });
    describe('USUÁRIO: Método Create', function () {
        it('Deve criar um novo usuário', function () {
            var novoUsuario = {
                id: 1,
                name: 'Novo usuario',
                email: 'novousuario@gmail.com',
                password: '1234'
            };
            var user = new service_1.default();
            return user
                .create(novoUsuario)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
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
