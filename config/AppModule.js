"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.ServiceModule = exports.RepositoryModule = exports.ConfigModule = void 0;
const common_1 = require("@nestjs/common");
const AlgorithmController_1 = require("../controller/AlgorithmController");
const AttendanceController_1 = require("../controller/AttendanceController");
const HomeController_1 = require("../controller/HomeController");
const Attendance_1 = require("../entity/Attendance");
const Break_1 = require("../entity/Break");
const BreakRequest_1 = require("../entity/BreakRequest");
const Department_1 = require("../entity/Department");
const User_1 = require("../entity/User");
const AttendanceRepositoryImpl_1 = require("../repositoryimpl/AttendanceRepositoryImpl");
const UserRepositoryImpl_1 = require("../repositoryimpl/UserRepositoryImpl");
const AttendanceServiceImpl_1 = require("../serviceimpl/AttendanceServiceImpl");
const UserServiceImpl_1 = require("../serviceimpl/UserServiceImpl");
const UserController_1 = require("../controller/UserController");
const SequelizeConfig_1 = require("./SequelizeConfig");
const TimeoutInterceptor_1 = require("./TimeoutInterceptor");
let ConfigModule = class ConfigModule {
};
ConfigModule = __decorate([
    (0, common_1.Module)({
        providers: [TimeoutInterceptor_1.TimeoutInterceptor, ...SequelizeConfig_1.sequelizeConfig],
        exports: [TimeoutInterceptor_1.TimeoutInterceptor, ...SequelizeConfig_1.sequelizeConfig],
    })
], ConfigModule);
exports.ConfigModule = ConfigModule;
let RepositoryModule = class RepositoryModule {
};
RepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [
            UserRepositoryImpl_1.UserRepositoryImpl,
            AttendanceRepositoryImpl_1.AttendanceRepositoryImpl,
            ...User_1.userProviders,
            ...Department_1.departmentProviders,
            ...Attendance_1.attendanceProviders,
            ...Break_1.breakProviders,
            ...BreakRequest_1.breakRequestProviders,
        ],
        exports: [UserRepositoryImpl_1.UserRepositoryImpl, AttendanceRepositoryImpl_1.AttendanceRepositoryImpl, ...User_1.userProviders],
    })
], RepositoryModule);
exports.RepositoryModule = RepositoryModule;
let ServiceModule = class ServiceModule {
};
ServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [RepositoryModule],
        providers: [UserServiceImpl_1.UserServiceImpl, AttendanceServiceImpl_1.AttendanceServiceImpl],
        exports: [UserServiceImpl_1.UserServiceImpl, AttendanceServiceImpl_1.AttendanceServiceImpl],
    })
], ServiceModule);
exports.ServiceModule = ServiceModule;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [ServiceModule],
        controllers: [
            HomeController_1.HomeController,
            UserController_1.UserController,
            AttendanceController_1.AttendanceController,
            AlgorithmController_1.AlgorithmController,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=AppModule.js.map