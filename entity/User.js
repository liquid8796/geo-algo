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
exports.userProviders = exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const DatabaseConstant_1 = require("../constant/DatabaseConstant");
const Attendance_1 = require("./Attendance");
const Department_1 = require("./Department");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.SMALLINT),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(7)),
    __metadata("design:type", String)
], User.prototype, "employeeNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(50)),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(50)),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(50)),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, sequelize_typescript_1.Validate)({ isIn: [['user', 'admin', 'administrator']] }),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(20)),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(150)),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(11)),
    __metadata("design:type", String)
], User.prototype, "positionId", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(100)),
    __metadata("design:type", String)
], User.prototype, "positionName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(11)),
    (0, sequelize_typescript_1.ForeignKey)(() => Department_1.Department),
    __metadata("design:type", String)
], User.prototype, "departmentId", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.STRING(100)),
    __metadata("design:type", String)
], User.prototype, "companyName", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_1.DataTypes.INTEGER),
    __metadata("design:type", Number)
], User.prototype, "active", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Attendance_1.Attendance),
    __metadata("design:type", Array)
], User.prototype, "attendances", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'users' })
], User);
exports.User = User;
exports.userProviders = [
    {
        provide: DatabaseConstant_1.default.ENTITY_USER,
        useValue: User,
    },
];
//# sourceMappingURL=User.js.map