import { Sequelize } from 'sequelize-typescript';
import { Attendance } from 'src/entity/Attendance';
import { AttendanceBreak } from 'src/entity/AttendanceBreak';
import { AttendanceBreakRequest } from 'src/entity/AttendanceBreakRequest';
import { Break } from 'src/entity/Break';
import { BreakRequest } from 'src/entity/BreakRequest';
import { Department } from 'src/entity/Department';
import { User } from 'src/entity/User';

const mysqlInstance = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
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
      User,
      Department,
      Attendance,
      Break,
      BreakRequest,
      AttendanceBreak,
      AttendanceBreakRequest,
    ]);
    //await sequelize.sync({ force: true, alter: true });
    await sequelize.sync({ force: false, alter: false });
    return sequelize;
  },
};

const postgresInstance = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: 'rune.cwbhblx6yf32.ap-southeast-1.rds.amazonaws.com',
      port: 5432,
      username: 'project_attendance_user',
      password: 'project_attendance_user',
      database: 'project_attendance_system',
      pool: {
        max: 200,
        min: 0,
        acquire: 3600000,
        idle: 10000,
      },
    });
    sequelize.addModels([
      User,
      Department,
      Attendance,
      Break,
      BreakRequest,
      AttendanceBreak,
      AttendanceBreakRequest,
    ]);
    //await sequelize.sync({ force: true, alter: true });
    await sequelize.sync({ force: false, alter: false });
    return sequelize;
  },
};

export const sequelizeConfig = [mysqlInstance];
