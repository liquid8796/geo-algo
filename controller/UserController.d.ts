import { Response } from 'express';
import { UserDTO } from 'src/model/UserDTO';
import { UserService } from 'src/service/UserService';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAll(): any;
    findAll(res: Response): void;
    create(userDTO: UserDTO): any;
}
