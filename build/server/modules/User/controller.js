"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var service_1 = require("./service");
var UserController = (function () {
    function UserController() {
        this.UserService = new service_1.default();
    }
    UserController.prototype.getAll = function (req, res) {
        this.UserService
            .getAll()
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR)
                .json({ payload: 'Erro ao buscar todos usuários' });
        });
    };
    UserController.prototype.getById = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    UserController.prototype.createUser = function (req, res) {
        this.UserService
            .create(req.body)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            res.status(HTTPStatus.OK)
                .json({ payload: 'Erro ao cadastrar novo usuário' });
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    return UserController;
}());
exports.default = UserController;
