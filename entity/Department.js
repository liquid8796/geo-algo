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
exports.departmentProviders = exports.Department = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const DatabaseConstant_1 = require("../constant/DatabaseConstant");
const User_1 = require("./User");
let Department = class Department extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(11)),
    __metadata("design:type", String)
], Department.prototype, "code", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(200)),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => User_1.User),
    __metadata("design:type", Array)
], Department.prototype, "users", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Department.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Department.prototype, "updatedAt", void 0);
Department = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'departments' })
], Department);
exports.Department = Department;
exports.departmentProviders = [
    {
        provide: DatabaseConstant_1.default.ENTITY_DEPARTMENT,
        useValue: Department,
    },
];
//# sourceMappingURL=Department.js.map