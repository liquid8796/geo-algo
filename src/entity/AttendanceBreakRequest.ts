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
import { Attendance } from './Attendance';
import { BreakRequest } from './BreakRequest';

@Table({ tableName: 'attendance_breaksRequests' })
export class AttendanceBreakRequest extends Model {
  @ForeignKey(() => Attendance)
  @Column(DataTypes.BIGINT)
  attendanceId: number;

  @ForeignKey(() => BreakRequest)
  @Column(DataTypes.BIGINT)
  breaksRequestId: number;

  @AllowNull
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull
  @UpdatedAt
  @Column
  updatedAt: Date;
}
