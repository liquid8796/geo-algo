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
import { AttendanceDTO } from 'src/model/AttendanceDTO';
import { AttendanceService } from 'src/service/AttendanceService';
import { AttendanceServiceImpl } from 'src/serviceimpl/AttendanceServiceImpl';

@Controller('attendance')
export class AttendanceController {
  constructor(
    @Inject(AttendanceServiceImpl)
    private attendanceService: AttendanceService,
  ) {}

  @Get('/list')
  getAll() {
    return this.attendanceService.getAll();
  }

  @Get('/list/v2')
  findAll(@Res() res: Response) {
    this.attendanceService
      .getAll()
      .then((list: any) => res.status(HttpStatus.OK).send(list));
  }

  @Post('/create')
  create(@Body() attendanceDTO: AttendanceDTO) {
    return this.attendanceService.create(attendanceDTO);
  }

  @Get('/bulkcreate')
  bulkCreate() {
    return this.attendanceService.bulkCreate();
  }
}
