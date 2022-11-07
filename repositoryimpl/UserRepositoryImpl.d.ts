import { User } from 'src/entity/User';
import { UserRepository } from 'src/repository/UserRepository';
export declare class UserRepositoryImpl implements UserRepository {
    private userEntity;
    constructor(userEntity: typeof User);
    getAll(condition?: any, option?: any): Promise<User[]>;
    findById(id: number, option?: any): Promise<User>;
    create(dto: any, option?: any): Promise<User>;
    update(user: User): Promise<User>;
    deleteById(id: number): Promise<void | undefined>;
}
