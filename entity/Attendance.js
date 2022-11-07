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
exports.attendanceProviders = exports.Attendance = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const DatabaseConstant_1 = require("../constant/DatabaseConstant");
const AttendanceBreak_1 = require("./AttendanceBreak");
const AttendanceBreakRequest_1 = require("./AttendanceBreakRequest");
const Break_1 = require("./Break");
const BreakRequest_1 = require("./BreakRequest");
const User_1 = require("./User");
let Attendance = class Attendance extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_1.BIGINT,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Attendance.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(5),
        defaultValue: '',
        allowNull: false,
        validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
    }),
    __metadata("design:type", String)
], Attendance.prototype, "timeCheckIn", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(5),
        defaultValue: '',
        allowNull: false,
        validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
    }),
    __metadata("design:type", String)
], Attendance.prototype, "timeCheckOut", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(5),
        defaultValue: '',
        allowNull: false,
        validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
    }),
    __metadata("design:type", String)
], Attendance.prototype, "timeCheckInRequest", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(5),
        defaultValue: '',
        allowNull: false,
        validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
    }),
    __metadata("design:type", String)
], Attendance.prototype, "timeCheckOutRequest", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(2),
        allowNull: false,
        validate: { is: /^(0[1-9]|[12][0-9]|30|31)$/ },
    }),
    __metadata("design:type", String)
], Attendance.prototype, "day", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(2),
        allowNull: false,
        validate: { is: /^([1-9]|1[012])$/ },
    }),
    __metadata("design:type", String)
], Attendance.prototype, "month", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(4),
        allowNull: false,
        validate: { is: /^2\d{3}$/ },
    }),
    __metadata("design:type", String)
], Attendance.prototype, "year", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(500),
    }),
    __metadata("design:type", String)
], Attendance.prototype, "reason", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(500),
    }),
    __metadata("design:type", String)
], Attendance.prototype, "rejectReason", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(20),
        validate: {
            is: /^2\d{3}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|30|31)\s[0-2]\d:[0-5]\d$/,
        },
    }),
    __metadata("design:type", String)
], Attendance.prototype, "requestTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        validate: { is: /^[0123456789]$/ },
    }),
    __metadata("design:type", String)
], Attendance.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.SMALLINT),
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    __metadata("design:type", Number)
], Attendance.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.SMALLINT),
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    __metadata("design:type", Number)
], Attendance.prototype, "rejectByUserId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Break_1.Break, () => AttendanceBreak_1.AttendanceBreak),
    __metadata("design:type", Array)
], Attendance.prototype, "breaks", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => BreakRequest_1.BreakRequest, () => AttendanceBreakRequest_1.AttendanceBreakRequest),
    __metadata("design:type", Array)
], Attendance.prototype, "breakRequests", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Attendance.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Attendance.prototype, "updatedAt", void 0);
Attendance = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'attendances' })
], Attendance);
exports.Attendance = Attendance;
exports.attendanceProviders = [
    {
        provide: DatabaseConstant_1.default.ENTITY_ATTENDANCE,
        useValue: Attendance,
    },
];
//# sourceMappingURL=Attendance.js.map