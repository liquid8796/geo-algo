import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UserDTO } from 'src/model/UserDTO';
import { UserService } from 'src/service/UserService';
import { UserServiceImpl } from 'src/serviceimpl/UserServiceImpl';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserServiceImpl)
    private userService: UserService,
  ) {}

  @Get('/list')
  getAll() {
    return this.userService.getAll();
  }

  @Get('/list/v2')
  findAll(@Res() res: Response) {
    this.userService
      .getAll()
      .then((list: any) => res.status(HttpStatus.OK).send(list));
  }

  @Post('/create')
  create(@Body() userDTO: UserDTO) {
    return this.userService.create(userDTO);
  }
}
