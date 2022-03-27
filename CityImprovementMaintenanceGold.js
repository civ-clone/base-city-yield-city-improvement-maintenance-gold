"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CityImprovementMaintenanceGold_cityImprovement;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityImprovementMaintenanceGold = void 0;
const Yield_1 = require("@civ-clone/core-yield/Yield");
class CityImprovementMaintenanceGold extends Yield_1.default {
    constructor(value, cityImprovement) {
        super(value, cityImprovement.id());
        _CityImprovementMaintenanceGold_cityImprovement.set(this, void 0);
        __classPrivateFieldSet(this, _CityImprovementMaintenanceGold_cityImprovement, cityImprovement, "f");
        this.addKey('cityImprovement');
    }
    cityImprovement() {
        return __classPrivateFieldGet(this, _CityImprovementMaintenanceGold_cityImprovement, "f");
    }
}
exports.CityImprovementMaintenanceGold = CityImprovementMaintenanceGold;
_CityImprovementMaintenanceGold_cityImprovement = new WeakMap();
exports.default = CityImprovementMaintenanceGold;
//# sourceMappingURL=CityImprovementMaintenanceGold.js.map