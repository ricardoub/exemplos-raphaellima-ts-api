"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var errorHandlerApi_1 = require("./api/errorHandlerApi");
var config = require('./config/env/config')();
var server = http.createServer(api_1.default);
api_1.default.use(errorHandlerApi_1.errorHandlerApi);
server.listen(config.serverPort, function () { return console.log('Server está rodando na porta 3000'); });
