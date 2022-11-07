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
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakRequestProviders = exports.BreakRequest = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const DatabaseConstant_1 = require("../constant/DatabaseConstant");
const AttendanceBreakRequest_1 = require("./AttendanceBreakRequest");
const Attendance_1 = require("./Attendance");
let BreakRequest = class BreakRequest extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_1.BIGINT,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", String)
], BreakRequest.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(5),
        defaultValue: '',
        allowNull: false,
        validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
    }),
    __metadata("design:type", String)
], BreakRequest.prototype, "start", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(5),
        defaultValue: '',
        allowNull: false,
        validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
    }),
    __metadata("design:type", String)
], BreakRequest.prototype, "end", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Attendance_1.Attendance, () => AttendanceBreakRequest_1.AttendanceBreakRequest),
    __metadata("design:type", Array)
], BreakRequest.prototype, "attendances", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BreakRequest.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BreakRequest.prototype, "updatedAt", void 0);
BreakRequest = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'breaksRequests' })
], BreakRequest);
exports.BreakRequest = BreakRequest;
exports.breakRequestProviders = [
    {
        provide: DatabaseConstant_1.default.ENTITY_BREAKREQUEST,
        useValue: BreakRequest,
    },
];
//# sourceMappingURL=BreakRequest.js.map