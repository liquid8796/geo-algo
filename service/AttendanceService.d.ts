import { AttendanceDTO } from 'src/model/AttendanceDTO';
export interface AttendanceService {
    getAll(condition?: any, option?: any): any;
    create(dto: AttendanceDTO, option?: any): any;
    bulkCreate(): any;
}
