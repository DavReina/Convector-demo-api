"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_1 = require("../convector");
function CarController_create_post(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_1;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CarControllerBackEnd
                            .create(params.car)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_1 = _c.sent();
                    console.log('Error post CarController_create', ex_1.stack);
                    res.status(500).send(ex_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CarController_create_post = CarController_create_post;
function CarController_get_get(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_2;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CarControllerBackEnd
                            .get(params.id)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_2 = _c.sent();
                    console.log('Error get CarController_get', ex_2.stack);
                    res.status(500).send(ex_2);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CarController_get_get = CarController_get_get;
//# sourceMappingURL=controllers.js.map