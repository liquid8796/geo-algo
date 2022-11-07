import { Model } from 'sequelize-typescript';
export declare class AttendanceBreak extends Model {
    attendanceId: number;
    breakId: number;
    createdAt: Date;
    updatedAt: Date;
}
