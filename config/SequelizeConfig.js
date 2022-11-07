"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConfig = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Attendance_1 = require("../entity/Attendance");
const AttendanceBreak_1 = require("../entity/AttendanceBreak");
const AttendanceBreakRequest_1 = require("../entity/AttendanceBreakRequest");
const Break_1 = require("../entity/Break");
const BreakRequest_1 = require("../entity/BreakRequest");
const Department_1 = require("../entity/Department");
const User_1 = require("../entity/User");
exports.sequelizeConfig = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: 'bail.cwbhblx6yf32.ap-southeast-1.rds.amazonaws.com',
                port: 3306,
                username: 'Organa',
                password: 'IlRf4VvKagUue03K855s',
                database: 'project_attendance_system',
                pool: {
                    max: 200,
                    min: 0,
                    acquire: 3600000,
                    idle: 10000,
                },
            });
            sequelize.addModels([
                User_1.User,
                Department_1.Department,
                Attendance_1.Attendance,
                Break_1.Break,
                BreakRequest_1.BreakRequest,
                AttendanceBreak_1.AttendanceBreak,
                AttendanceBreakRequest_1.AttendanceBreakRequest,
            ]);
            await sequelize.sync({ force: false, alter: false });
            return sequelize;
        },
    },
];
//# sourceMappingURL=SequelizeConfig.js.map