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
exports.UserServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const UserRepositoryImpl_1 = require("../repositoryimpl/UserRepositoryImpl");
let UserServiceImpl = class UserServiceImpl {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getAll(condition, option) {
        return this.userRepository.getAll();
    }
    create(dto, option) {
        return this.userRepository.create(dto, option);
    }
};
UserServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(UserRepositoryImpl_1.UserRepositoryImpl)),
    __metadata("design:paramtypes", [Object])
], UserServiceImpl);
exports.UserServiceImpl = UserServiceImpl;
//# sourceMappingURL=UserServiceImpl.js.map