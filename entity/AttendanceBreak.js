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
exports.AttendanceBreak = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const Attendance_1 = require("./Attendance");
const Break_1 = require("./Break");
let AttendanceBreak = class AttendanceBreak extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Attendance_1.Attendance),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.BIGINT),
    __metadata("design:type", Number)
], AttendanceBreak.prototype, "attendanceId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Break_1.Break),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.BIGINT),
    __metadata("design:type", Number)
], AttendanceBreak.prototype, "breakId", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], AttendanceBreak.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], AttendanceBreak.prototype, "updatedAt", void 0);
AttendanceBreak = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'attendance_breaks' })
], AttendanceBreak);
exports.AttendanceBreak = AttendanceBreak;
//# sourceMappingURL=AttendanceBreak.js.map