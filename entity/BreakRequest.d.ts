import { Model } from 'sequelize-typescript';
import { Attendance } from './Attendance';
export declare class BreakRequest extends Model {
    id: string;
    start: string;
    end: string;
    attendances: Attendance[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const breakRequestProviders: {
    provide: string;
    useValue: typeof BreakRequest;
}[];
