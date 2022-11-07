import { Sequelize } from 'sequelize-typescript';
export declare const sequelizeConfig: {
    provide: string;
    useFactory: () => Promise<Sequelize>;
}[];
