import {
  BIGINT,
  BuildOptions,
  DataTypes,
  HasManyCreateAssociationMixin,
  STRING,
} from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  BelongsToMany,
  Column,
  CreatedAt,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Scopes,
  Table,
  UpdatedAt,
  Validate,
} from 'sequelize-typescript';
import DatabaseConstant from 'src/constant/DatabaseConstant';
import { AttendanceBreak } from './AttendanceBreak';
import { AttendanceBreakRequest } from './AttendanceBreakRequest';
import { Break } from './Break';
import { BreakRequest } from './BreakRequest';
import { User } from './User';

@Table({ tableName: 'attendances' })
export class Attendance extends Model {
  @Column({
    primaryKey: true,
    type: BIGINT,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING(5),
    defaultValue: '',
    allowNull: false,
    validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
  })
  timeCheckIn: string;

  @Column({
    type: DataTypes.STRING(5),
    defaultValue: '',
    allowNull: false,
    validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
  })
  timeCheckOut: string;

  @Column({
    type: DataTypes.STRING(5),
    defaultValue: '',
    allowNull: false,
    validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
  })
  timeCheckInRequest: string;

  @Column({
    type: DataTypes.STRING(5),
    defaultValue: '',
    allowNull: false,
    validate: { is: /^(([0-3]\d|4[0-7]):[0-5]\d)?$/ },
  })
  timeCheckOutRequest: string;

  @Column({ type: DataTypes.STRING(10), defaultValue: '' })
  totalBreakTimeRequest: string;

  @Column({ type: DataTypes.STRING(10), defaultValue: '' })
  totalWorkTimeRequest: string;

  @Column({
    type: DataTypes.STRING(2),
    allowNull: false,
    validate: { is: /^(0[1-9]|[12][0-9]|30|31)$/ },
  })
  day: string;

  @Column({
    type: DataTypes.STRING(2),
    allowNull: false,
    validate: { is: /^([1-9]|1[012])$/ },
  })
  month: string;

  @Column({
    type: DataTypes.STRING(4),
    allowNull: false,
    validate: { is: /^2\d{3}$/ },
  })
  year: string;

  @Column({
    type: DataTypes.STRING(500),
  })
  reason: string;

  @Column({
    type: DataTypes.STRING(500),
  })
  rejectReason: string;

  @Column({
    type: DataTypes.STRING(20),
    validate: {
      // 2999/02/31 29:59
      is: /^2\d{3}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|30|31)\s[0-2]\d:[0-5]\d$/,
    },
  })
  requestTime: string;

  @Column({
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    validate: { is: /^[0123456789]$/ },
  })
  status: string;

  @Column(DataTypes.SMALLINT)
  @ForeignKey(() => User)
  userId: number;

  @Column(DataTypes.SMALLINT)
  @ForeignKey(() => User)
  rejectByUserId: number;

  @BelongsToMany(() => Break, () => AttendanceBreak)
  breaks: Break[];
  // breaks: Array<Break & { AttendanceBreak: AttendanceBreak }>;

  @BelongsToMany(() => BreakRequest, () => AttendanceBreakRequest)
  breakRequests: BreakRequest[];
  // breakRequests: Array<
  //   BreakRequest & { AttendanceBreak: AttendanceBreakRequest }
  // >;

  @AllowNull
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull
  @UpdatedAt
  @Column
  updatedAt: Date;
}

export const attendanceProviders = [
  {
    provide: DatabaseConstant.ENTITY_ATTENDANCE,
    useValue: Attendance,
  },
];
