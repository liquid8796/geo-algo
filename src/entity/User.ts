import { BuildOptions, DataTypes, STRING } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
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
import { Department } from './Department';

@Table({ tableName: 'users' })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataTypes.SMALLINT)
  id: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(7))
  employeeNumber: string;

  @Column({ type: STRING(100), allowNull: false })
  userName: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(50))
  firstName: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(50))
  lastName: string;

  @Validate({ isIn: [['user', 'admin', 'administrator']] })
  @AllowNull(false)
  @Column(DataTypes.STRING(20))
  role: string;

  @AllowNull
  @Column(DataTypes.STRING(150))
  email: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(11))
  positionId: string;

  @AllowNull
  @Column(DataTypes.STRING(100))
  positionName: string;

  // @Column({
  //   type: STRING(11),
  //   onDelete: 'SET NULL',
  //   onUpdate: 'CASCADE',
  //   references: {
  //     model: Department,
  //     key: 'code',
  //   },
  // })
  @Column(DataTypes.STRING(11))
  @ForeignKey(() => Department)
  departmentId: string;

  @AllowNull
  @Column(DataTypes.STRING(100))
  companyName: string;

  @AllowNull(false)
  @Column(DataTypes.INTEGER)
  active: number;

  @HasMany(() => Attendance)
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

export const userProviders = [
  {
    provide: DatabaseConstant.ENTITY_USER,
    useValue: User,
  },
];
