import { Inject, Injectable } from '@nestjs/common';
import DatabaseConstant from 'src/constant/DatabaseConstant';
import { User } from 'src/entity/User';
import { UserRepository } from 'src/repository/UserRepository';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @Inject(DatabaseConstant.ENTITY_USER)
    private userEntity: typeof User,
  ) {}
  getAll(condition?: any, option?: any) {
    return this.userEntity.findAll({ where: condition, ...option });
  }
  findById(id: number, option?: any) {
    return this.userEntity.findByPk(id, option);
  }
  create(dto: any, option?: any) {
    return this.userEntity.create(dto);
  }
  update(user: User) {
    return this.userEntity.findByPk(user.id).then((result) => {
      result = user;
      return result.save();
    });
  }
  deleteById(id: number) {
    return this.userEntity.findByPk(id).then((result) => {
      return result?.destroy();
    });
  }
}
