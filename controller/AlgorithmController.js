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
exports.AlgorithmController = void 0;
const common_1 = require("@nestjs/common");
const S = [
    [
        [113, 10],
        [499, 6],
        [377, 5],
    ],
    [
        [224, 8],
        [761, 10],
        [174, 1],
    ],
    [
        [700, 2],
        [999, 10],
        [871, 10],
    ],
    [
        [113, 10],
        [114, 9],
        [115, 7],
    ],
];
let AlgorithmController = class AlgorithmController {
    executeAlgo(list) {
        const startTime = performance.now();
        const result = this.main(list);
        const endTime = performance.now();
        return {
            result: {
                index: result.indexOf(Math.max(...result)),
                total: Math.max(...result),
            },
            time: endTime - startTime,
        };
    }
    test() {
        this.removeItem(S[0][0], 174);
        return S;
    }
    main(students) {
        let minTime = [];
        let totalPoint = [];
        for (let i = 0; i < students[0].length; i++) {
            for (let j = 0; j < students.length; j++) {
                if (totalPoint[j] !== null) {
                    totalPoint[j] = this.binaryStudentSum(students[j], 1);
                }
                if (j > 0) {
                    if (minTime[i] > students[j][i][0]) {
                        minTime[i] = students[j][i][0];
                    }
                }
                else {
                    minTime[i] = students[j][i][0];
                }
            }
            for (let i = 0; i < students[0].length; i++) {
                for (let j = 0; j < students.length; j++) {
                    if (minTime[i] === students[j][i][0] && students[j][i][1] === 10) {
                        totalPoint[j]++;
                    }
                }
            }
        }
        return totalPoint;
    }
    binaryStudentSum(list, type) {
        return this.recursiveStudentSum(0, list.length - 1, list, type);
    }
    recursiveStudentSum(low, high, list, type) {
        if (low == high)
            return list[low][type];
        else {
            const mid = Math.floor((low + high) / 2);
            return (this.recursiveStudentSum(low, mid, list, 1) +
                this.recursiveStudentSum(mid + 1, high, list, 1));
        }
    }
    removeItem(arr, value) {
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
};
__decorate([
    (0, common_1.Get)('/run'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], AlgorithmController.prototype, "executeAlgo", null);
__decorate([
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlgorithmController.prototype, "test", null);
AlgorithmController = __decorate([
    (0, common_1.Controller)('algo')
], AlgorithmController);
exports.AlgorithmController = AlgorithmController;
//# sourceMappingURL=AlgorithmController.js.map