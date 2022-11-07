import { AttendanceDTO } from './AttendanceDTO';
export declare class BreakDTO {
    id?: string;
    start?: string;
    end?: string;
    attendances?: AttendanceDTO[];
    createdAt?: Date;
    updatedAt?: Date;
}
