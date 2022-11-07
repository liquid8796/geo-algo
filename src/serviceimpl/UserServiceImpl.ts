import { Inject, Injectable } from '@nestjs/common';
import { Length } from 'sequelize-typescript';
import { User } from 'src/entity/User';
import { UserDTO } from 'src/model/UserDTO';
import { UserRepository } from 'src/repository/UserRepository';
import { UserRepositoryImpl } from 'src/repositoryimpl/UserRepositoryImpl';
import { UserService } from 'src/service/UserService';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(
    @Inject(UserRepositoryImpl)
    private userRepository: UserRepository,
  ) {}
  getAll(condition?: any, option?: any) {
    return this.userRepository.getAll();
  }
  create(dto: UserDTO, option?: any) {
    return this.userRepository.create(dto, option);
  }
}
