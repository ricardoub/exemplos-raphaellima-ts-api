"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
var model = require('../../server/models');
describe('Testes unitários do controller', function () {
    var defaultUser = {
        id: 1,
        name: 'Default User',
        email: 'defaultuser@email.com',
        password: '1234'
    };
    beforeEach(function (done) {
        model.User.destroy({
            where: {}
        })
            .then(function () {
            model.User.create(defaultUser).then(function () {
                console.log("Default User Created");
                done();
            });
        });
    });
    describe('USUÁRIO: Método Create', function () {
        it('Deve criar um novo usuário', function () {
            var novoUsuario = {
                id: 2,
                name: 'Novo usuario',
                email: 'novousuario@gmail.com',
                password: '1234'
            };
            return service_1.default
                .create(novoUsuario)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    describe('USUÁRIO: Método Update', function () {
        it('Deve atualizar um Usuário', function () {
            var usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@gmail.com'
            };
            return service_1.default
                .update(defaultUser.id, usuarioAtualizado)
                .then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    describe('USUÁRIO: Método GET users', function () {
        it('Deve retornar uma lista com todos os usuários', function () {
            return service_1.default
                .getAll()
                .then(function (data) {
                helpers_1.expect(data).to.be.an('array');
            });
        });
    });
    describe('USUÁRIO: Método getById', function () {
        it('Deve retornar um usuário de acordo com o ID passado', function () {
            return service_1.default
                .getById(defaultUser.id)
                .then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('USUÁRIO: Método getByEmail', function () {
        it('Deve retornar um usuário de acordo com o email passado', function () {
            return service_1.default
                .getByEmail(defaultUser.email)
                .then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('USUÁRIO: Método Delete', function () {
        it('Deve deletar um Usuário', function () {
            return service_1.default
                .delete(defaultUser.id)
                .then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
});
