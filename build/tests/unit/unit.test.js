"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
describe('Testes unitários do controller', function () {
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
    describe('USUÁRIO: Método Update', function () {
        it('Deve atualizar um Usuário', function () {
            var usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@gmail.com'
            };
            var user = new service_1.default();
            return user
                .update(1, usuarioAtualizado)
                .then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
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
    describe('USUÁRIO: Método getByEmail', function () {
        it('Deve retornar um usuário de acordo com o email passado', function () {
            var user = new service_1.default();
            return user
                .getByEmail('atualizado@gmail.com')
                .then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('USUÁRIO: Método Delete', function () {
        it('Deve deletar um Usuário', function () {
            var user = new service_1.default();
            return user
                .delete(1)
                .then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
});
