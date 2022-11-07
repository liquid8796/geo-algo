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
exports.AttendanceServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const Break_1 = require("../entity/Break");
const BreakRequest_1 = require("../entity/BreakRequest");
const AttendanceDTO_1 = require("../model/AttendanceDTO");
const BreakDTO_1 = require("../model/BreakDTO");
const BreakRequestDTO_1 = require("../model/BreakRequestDTO");
const AttendanceRepositoryImpl_1 = require("../repositoryimpl/AttendanceRepositoryImpl");
const UserRepositoryImpl_1 = require("../repositoryimpl/UserRepositoryImpl");
let AttendanceServiceImpl = class AttendanceServiceImpl {
    constructor(attendanceRepository, userRepository) {
        this.attendanceRepository = attendanceRepository;
        this.userRepository = userRepository;
    }
    getAll(condition, option) {
        return this.attendanceRepository.getAll({}, {
            include: [{ model: Break_1.Break }, { model: BreakRequest_1.BreakRequest }],
            offset: 0,
            limit: 20,
        });
    }
    create(dto, option) {
        return this.attendanceRepository.create(dto, option);
    }
    bulkCreate() {
        try {
            this.executeBulkCreate();
        }
        catch (e) {
            this.executeBulkCreate();
        }
    }
    async executeBulkCreate() {
        const users = (await this.userRepository.getAll());
        for (let i = 1; i < 4; i++) {
            let cursor = 133;
            if (i > 1) {
                cursor = 1;
            }
            for (let count = cursor; count < users.length; count++) {
                const bulkArray = [];
                for (let year = 2017; year <= 2022; year++) {
                    for (let month = 1; month <= 12; month++) {
                        const totalDay = new Date(year, month, 0).getDate();
                        for (let day = 1; day <= totalDay; day++) {
                            const tmp = new AttendanceDTO_1.AttendanceDTO();
                            tmp.timeCheckIn = '08:00';
                            tmp.timeCheckOut = '17:00';
                            tmp.timeCheckInRequest = '08:00';
                            tmp.timeCheckOutRequest = '17:00';
                            tmp.requestTime =
                                year +
                                    '/' +
                                    month.toString().padStart(2, '0') +
                                    '/' +
                                    day.toString().padStart(2, '0') +
                                    ' ' +
                                    new Date().getHours().toString().padStart(2, '0') +
                                    ':' +
                                    new Date().getMinutes().toString().padStart(2, '0');
                            tmp.day = day.toString().padStart(2, '0');
                            tmp.month = month.toString();
                            tmp.year = year.toString();
                            tmp.reason = 'test vietnam04';
                            tmp.status = Math.floor(Math.random() * 10);
                            tmp.userId = users[count].id;
                            const _break = new BreakDTO_1.BreakDTO();
                            const _breaks = [];
                            _break.start = '12:00';
                            _break.end = '13:00';
                            _breaks.push(_break);
                            const _breakRequest = new BreakRequestDTO_1.BreakRequestDTO();
                            const _breakRequests = [];
                            _breakRequest.start = '12:00';
                            _breakRequest.end = '13:00';
                            _breakRequests.push(_breakRequest);
                            bulkArray.push(tmp);
                        }
                    }
                }
                this.attendanceRepository.bulkCreate(bulkArray);
            }
        }
    }
};
AttendanceServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(AttendanceRepositoryImpl_1.AttendanceRepositoryImpl)),
    __param(1, (0, common_1.Inject)(UserRepositoryImpl_1.UserRepositoryImpl)),
    __metadata("design:paramtypes", [Object, Object])
], AttendanceServiceImpl);
exports.AttendanceServiceImpl = AttendanceServiceImpl;
//# sourceMappingURL=AttendanceServiceImpl.js.map