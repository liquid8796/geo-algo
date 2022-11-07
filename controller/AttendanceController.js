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
exports.AttendanceController = void 0;
const common_1 = require("@nestjs/common");
const AttendanceDTO_1 = require("../model/AttendanceDTO");
const AttendanceServiceImpl_1 = require("../serviceimpl/AttendanceServiceImpl");
let AttendanceController = class AttendanceController {
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    getAll() {
        return this.attendanceService.getAll();
    }
    findAll(res) {
        this.attendanceService
            .getAll()
            .then((list) => res.status(common_1.HttpStatus.OK).send(list));
    }
    create(attendanceDTO) {
        return this.attendanceService.create(attendanceDTO);
    }
    bulkCreate() {
        return this.attendanceService.bulkCreate();
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/list/v2'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AttendanceDTO_1.AttendanceDTO]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/bulkcreate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "bulkCreate", null);
AttendanceController = __decorate([
    (0, common_1.Controller)('attendance'),
    __param(0, (0, common_1.Inject)(AttendanceServiceImpl_1.AttendanceServiceImpl)),
    __metadata("design:paramtypes", [Object])
], AttendanceController);
exports.AttendanceController = AttendanceController;
//# sourceMappingURL=AttendanceController.js.map