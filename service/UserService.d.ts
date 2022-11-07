import { UserDTO } from 'src/model/UserDTO';
export interface UserService {
    getAll(condition?: any, option?: any): any;
    create(dto: UserDTO, option?: any): any;
}
