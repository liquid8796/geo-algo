import { BIGINT, BuildOptions, DataTypes, STRING } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  BelongsToMany,
  Column,
  CreatedAt,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
  Validate,
} from 'sequelize-typescript';
import DatabaseConstant from 'src/constant/DatabaseConstant';
import { AttendanceBreakRequest } from './AttendanceBreakRequest';
import { Attendance } from './Attendance';

@Table({ tableName: 'breaksRequests' })
export class BreakRequest extends Model {
  @Column({
    primaryKey: true,
    type: BIGINT,
    allowNull: false,
    autoIncrement: true,
  })
  id: string;

  @Column({
    type: DataTypes.STRING(5),
    defaultValue: '',
    allowNull: false,
    validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
  })
  start: string;

  @Column({
    type: DataTypes.STRING(5),
    defaultValue: '',
    allowNull: false,
    validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
  })
  end: string;

  @BelongsToMany(() => Attendance, () => AttendanceBreakRequest)
  attendances: Attendance[];

  @AllowNull
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull
  @UpdatedAt
  @Column
  updatedAt: Date;
}

export const breakRequestProviders = [
  {
    provide: DatabaseConstant.ENTITY_BREAKREQUEST,
    useValue: BreakRequest,
  },
];
