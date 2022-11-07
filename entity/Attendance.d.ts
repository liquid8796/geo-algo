import { Model } from 'sequelize-typescript';
import { Break } from './Break';
import { BreakRequest } from './BreakRequest';
export declare class Attendance extends Model {
    id: number;
    timeCheckIn: string;
    timeCheckOut: string;
    timeCheckInRequest: string;
    timeCheckOutRequest: string;
    day: string;
    month: string;
    year: string;
    reason: string;
    rejectReason: string;
    requestTime: string;
    status: string;
    userId: number;
    rejectByUserId: number;
    breaks: Break[];
    breakRequests: BreakRequest[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const attendanceProviders: {
    provide: string;
    useValue: typeof Attendance;
}[];
