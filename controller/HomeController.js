"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
let HomeController = class HomeController {
    getRootDir() {
        return __dirname;
    }
    getDocs(version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }
    findOne(id) {
        console.log(id);
        return `This action returns a #${id} param testing`;
    }
    getCurrentTotalDay() {
        const totalDay = new Date(2017, 7, 0).getDate();
        return totalDay;
    }
    getCurrentTime() {
        const time = new Date();
        return time;
    }
};
__decorate([
    (0, common_1.Get)('/dir'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "getRootDir", null);
__decorate([
    (0, common_1.Get)('/docs'),
    (0, common_1.Redirect)('https://docs.nestjs.com', 302),
    __param(0, (0, common_1.Query)('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "getDocs", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/get-current-total-day'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "getCurrentTotalDay", null);
__decorate([
    (0, common_1.Get)('/get-current-time'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "getCurrentTime", null);
HomeController = __decorate([
    (0, common_1.Controller)()
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=HomeController.js.map