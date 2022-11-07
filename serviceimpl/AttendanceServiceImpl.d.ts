import { AttendanceDTO } from 'src/model/AttendanceDTO';
import { AttendanceRepository } from 'src/repository/AttendanceRepository';
import { UserRepository } from 'src/repository/UserRepository';
import { AttendanceService } from 'src/service/AttendanceService';
export declare class AttendanceServiceImpl implements AttendanceService {
    private attendanceRepository;
    private userRepository;
    constructor(attendanceRepository: AttendanceRepository, userRepository: UserRepository);
    getAll(condition?: any, option?: any): any;
    create(dto: AttendanceDTO, option?: any): any;
    bulkCreate(): void;
    private executeBulkCreate;
}
