import { UserDTO } from 'src/model/UserDTO';
import { UserRepository } from 'src/repository/UserRepository';
import { UserService } from 'src/service/UserService';
export declare class UserServiceImpl implements UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    getAll(condition?: any, option?: any): any;
    create(dto: UserDTO, option?: any): any;
}
