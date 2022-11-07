import { Inject, Injectable } from '@nestjs/common';
import DatabaseConstant from 'src/constant/DatabaseConstant';
import { User } from 'src/entity/User';
import { AttendanceDTO } from 'src/model/AttendanceDTO';
import { AttendanceRepository } from 'src/repository/AttendanceRepository';

@Injectable()
export class AttendanceRepositoryImpl implements AttendanceRepository {
  constructor(
    @Inject(DatabaseConstant.ENTITY_ATTENDANCE)
    private attendanceEntity: typeof User,
  ) {}
  getAll(condition?: any, option?: any) {
    return this.attendanceEntity.findAll({ where: condition, ...option });
  }
  findById(id: number, option?: any) {
    return this.attendanceEntity.findByPk(id, option);
  }
  create(dto: any, option?: any) {
    return this.attendanceEntity.create(dto);
  }
  bulkCreate(source: any, option?: any) {
    return this.attendanceEntity.bulkCreate(source, option);
  }
  update(user: User) {
    return this.attendanceEntity.findByPk(user.id).then((result) => {
      result = user;
      return result.save();
    });
  }
  deleteById(id: number) {
    return this.attendanceEntity.findByPk(id).then((result) => {
      return result?.destroy();
    });
  }
}
