import { Model } from 'sequelize-typescript';
import { User } from './User';
export declare class Department extends Model {
    code: string;
    name: string;
    users: User[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const departmentProviders: {
    provide: string;
    useValue: typeof Department;
}[];
