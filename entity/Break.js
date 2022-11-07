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
exports.breakProviders = exports.Break = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const DatabaseConstant_1 = require("../constant/DatabaseConstant");
const AttendanceBreak_1 = require("./AttendanceBreak");
const Attendance_1 = require("./Attendance");
let Break = class Break extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_1.BIGINT,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", String)
], Break.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(5),
        defaultValue: '',
        allowNull: false,
        validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
    }),
    __metadata("design:type", String)
], Break.prototype, "start", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(5),
        defaultValue: '',
        allowNull: false,
        validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
    }),
    __metadata("design:type", String)
], Break.prototype, "end", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Attendance_1.Attendance, () => AttendanceBreak_1.AttendanceBreak),
    __metadata("design:type", Array)
], Break.prototype, "attendances", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Break.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Break.prototype, "updatedAt", void 0);
Break = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'breaks' })
], Break);
exports.Break = Break;
exports.breakProviders = [
    {
        provide: DatabaseConstant_1.default.ENTITY_BREAK,
        useValue: Break,
    },
];
//# sourceMappingURL=Break.js.map