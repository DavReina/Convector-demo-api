"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_1 = require("@worldsibu/convector-core");
var car_model_1 = require("./car.model");
var CarController = (function (_super) {
    tslib_1.__extends(CarController, _super);
    function CarController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarController.prototype.create = function (car) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, car.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CarController.prototype.get = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, car_model_1.Car.getOne(id)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(car_model_1.Car))
    ], CarController.prototype, "create", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], CarController.prototype, "get", null);
    CarController = tslib_1.__decorate([
        convector_core_1.Controller('car')
    ], CarController);
    return CarController;
}(convector_core_1.ConvectorController));
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map