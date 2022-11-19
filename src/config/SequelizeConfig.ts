import { Sequelize } from 'sequelize-typescript';
import { Attendance } from 'src/entity/Attendance';
import { AttendanceBreak } from 'src/entity/AttendanceBreak';
import { AttendanceBreakRequest } from 'src/entity/AttendanceBreakRequest';
import { Break } from 'src/entity/Break';
import { BreakRequest } from 'src/entity/BreakRequest';
import { Department } from 'src/entity/Department';
import { User } from 'src/entity/User';
import pg from 'pg';

const uri = process.env.DB_URI || '';

const sequelizeInstance = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize(uri, {
      pool: {
        max: 200,
        min: 0,
        acquire: 3600000,
        idle: 10000,
      },
      logging: false,
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
    await sequelize.sync({ force: true, alter: true });
    return sequelize;
  },
};

export const sequelizeConfig = [sequelizeInstance];
