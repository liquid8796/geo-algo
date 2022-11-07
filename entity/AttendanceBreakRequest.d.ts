import { Model } from 'sequelize-typescript';
export declare class AttendanceBreakRequest extends Model {
    attendanceId: number;
    breaksRequestId: number;
    createdAt: Date;
    updatedAt: Date;
}
