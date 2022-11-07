import { Model } from 'sequelize-typescript';
import { Attendance } from './Attendance';
export declare class User extends Model {
    id: number;
    employeeNumber: string;
    username: string;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    positionId: string;
    positionName: string;
    departmentId: string;
    companyName: string;
    active: number;
    attendances: Attendance[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const userProviders: {
    provide: string;
    useValue: typeof User;
}[];
