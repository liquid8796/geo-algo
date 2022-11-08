import { Module } from '@nestjs/common';
import { AlgorithmController } from 'src/controller/AlgorithmController';
import { AttendanceController } from 'src/controller/AttendanceController';
import { HomeController } from 'src/controller/HomeController';
import { attendanceProviders } from 'src/entity/Attendance';
import { breakProviders } from 'src/entity/Break';
import { breakRequestProviders } from 'src/entity/BreakRequest';
import { departmentProviders } from 'src/entity/Department';
import { userProviders } from 'src/entity/User';
import { AttendanceRepositoryImpl } from 'src/repositoryimpl/AttendanceRepositoryImpl';
import { UserRepositoryImpl } from 'src/repositoryimpl/UserRepositoryImpl';
import { AttendanceServiceImpl } from 'src/serviceimpl/AttendanceServiceImpl';
import { UserServiceImpl } from 'src/serviceimpl/UserServiceImpl';
import { UserController } from '../controller/UserController';
import { sequelizeConfig } from './SequelizeConfig';
import { TimeoutInterceptor } from './TimeoutInterceptor';

@Module({
  providers: [TimeoutInterceptor, ...sequelizeConfig],
  exports: [TimeoutInterceptor, ...sequelizeConfig],
})
export class ConfigModule {}

@Module({
  imports: [ConfigModule],
  providers: [
    UserRepositoryImpl,
    AttendanceRepositoryImpl,
    ...userProviders,
    ...departmentProviders,
    ...attendanceProviders,
    ...breakProviders,
    ...breakRequestProviders,
  ],
  exports: [UserRepositoryImpl, AttendanceRepositoryImpl, ...userProviders],
})
export class RepositoryModule {}

@Module({
  imports: [RepositoryModule],
  providers: [UserServiceImpl, AttendanceServiceImpl],
  exports: [UserServiceImpl, AttendanceServiceImpl],
})
export class ServiceModule {}

@Module({
  imports: [ServiceModule],
  controllers: [
    HomeController,
    UserController,
    AttendanceController,
    AlgorithmController,
  ],
})
export class AppModule {}