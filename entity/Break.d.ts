import { Model } from 'sequelize-typescript';
import { Attendance } from './Attendance';
export declare class Break extends Model {
    id: string;
    start: string;
    end: string;
    attendances: Attendance[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const breakProviders: {
    provide: string;
    useValue: typeof Break;
}[];
