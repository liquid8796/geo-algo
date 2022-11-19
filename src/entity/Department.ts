import { BuildOptions, DataTypes, STRING } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
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
import { User } from './User';

@Table({ tableName: 'departments' })
export class Department extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.STRING(11))
  @AllowNull(false)
  code: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(200))
  name: string;

  @HasMany(() => User)
  users: User[];

  @AllowNull
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull
  @UpdatedAt
  @Column
  updatedAt: Date;
}

export const departmentProviders = [
  {
    provide: DatabaseConstant.ENTITY_DEPARTMENT,
    useValue: Department,
  },
];
