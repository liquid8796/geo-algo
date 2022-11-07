import { Response } from 'express';
import { AttendanceDTO } from 'src/model/AttendanceDTO';
import { AttendanceService } from 'src/service/AttendanceService';
export declare class AttendanceController {
    private attendanceService;
    constructor(attendanceService: AttendanceService);
    getAll(): any;
    findAll(res: Response): void;
    create(attendanceDTO: AttendanceDTO): any;
    bulkCreate(): any;
}
