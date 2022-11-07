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
exports.UserRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const DatabaseConstant_1 = require("../constant/DatabaseConstant");
let UserRepositoryImpl = class UserRepositoryImpl {
    constructor(userEntity) {
        this.userEntity = userEntity;
    }
    getAll(condition, option) {
        return this.userEntity.findAll(Object.assign({ where: condition }, option));
    }
    findById(id, option) {
        return this.userEntity.findByPk(id, option);
    }
    create(dto, option) {
        return this.userEntity.create(dto);
    }
    update(user) {
        return this.userEntity.findByPk(user.id).then((result) => {
            result = user;
            return result.save();
        });
    }
    deleteById(id) {
        return this.userEntity.findByPk(id).then((result) => {
            return result === null || result === void 0 ? void 0 : result.destroy();
        });
    }
};
UserRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(DatabaseConstant_1.default.ENTITY_USER)),
    __metadata("design:paramtypes", [Object])
], UserRepositoryImpl);
exports.UserRepositoryImpl = UserRepositoryImpl;
//# sourceMappingURL=UserRepositoryImpl.js.map