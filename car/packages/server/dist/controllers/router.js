"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("./controllers");
exports.default = express.Router()
    .post('/car/create', controllers_1.CarController_create_post)
    .get('/car/get/:id', controllers_1.CarController_get_get);
//# sourceMappingURL=router.js.map