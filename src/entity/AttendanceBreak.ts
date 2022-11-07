import { BIGINT, BuildOptions, DataTypes, STRING } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  BelongsToMany,
  Column,
  CreatedAt,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
  Validate,
} from 'sequelize-typescript';
import DatabaseConstant from 'src/constant/DatabaseConstant';
import { Attendance } from './Attendance';
import { Break } from './Break';
import { User } from './User';

@Table({ tableName: 'attendance_breaks' })
export class AttendanceBreak extends Model {
  @ForeignKey(() => Attendance)
  @Column(DataTypes.BIGINT)
  attendanceId: number;

  @ForeignKey(() => Break)
  @Column(DataTypes.BIGINT)
  breakId: number;

  @AllowNull
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull
  @UpdatedAt
  @Column
  updatedAt: Date;
}
