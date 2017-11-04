"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var errorHandler_1 = require("../../api/responses/errorHandler");
var successHandler_1 = require("../../api/responses/successHandler");
var dbErrorHandler_1 = require("../../config/dbErrorHandler");
var service_1 = require("./service");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (req, res) {
        service_1.default.getAll()
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao buscar todos os usuários'));
    };
    UserController.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.id);
        service_1.default.getById(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Usuário encontrado'));
    };
    UserController.prototype.createUser = function (req, res) {
        service_1.default.create(req.body)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao inserir novo usuário'));
    };
    UserController.prototype.updateUser = function (req, res) {
        var userId = parseInt(req.params.id);
        var props = req.body;
        service_1.default.update(userId, props)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Falha ao atualizar usuário'));
    };
    UserController.prototype.deleteUser = function (req, res) {
        var userId = parseInt(req.params.id);
        service_1.default.delete(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao excluir usuário'));
    };
    return UserController;
}());
exports.default = UserController;
