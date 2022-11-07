import { User } from 'src/entity/User';
import { AttendanceRepository } from 'src/repository/AttendanceRepository';
export declare class AttendanceRepositoryImpl implements AttendanceRepository {
    private attendanceEntity;
    constructor(attendanceEntity: typeof User);
    getAll(condition?: any, option?: any): Promise<User[]>;
    findById(id: number, option?: any): Promise<User>;
    create(dto: any, option?: any): Promise<User>;
    bulkCreate(source: any, option?: any): Promise<User[]>;
    update(user: User): Promise<User>;
    deleteById(id: number): Promise<void | undefined>;
}
