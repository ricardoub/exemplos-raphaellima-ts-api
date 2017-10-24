"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jwt-simple");
var config = require('../../config/env/config')();
function authSuccess(res, credentials, data) {
    var isMatch = (credentials.password == data.password);
    if (isMatch) {
        var payload = { id: data.id };
        res.json({
            token: jwt.encode(payload, config.secret)
        });
    }
    else {
        res.status(httpStatus.UNAUTHORIZED);
    }
}
exports.default = authSuccess;
