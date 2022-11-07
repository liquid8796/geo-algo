import { Inject, Injectable } from '@nestjs/common';
import { Break } from 'src/entity/Break';
import { BreakRequest } from 'src/entity/BreakRequest';
import { User } from 'src/entity/User';
import { AttendanceDTO } from 'src/model/AttendanceDTO';
import { BreakDTO } from 'src/model/BreakDTO';
import { BreakRequestDTO } from 'src/model/BreakRequestDTO';
import { AttendanceRepository } from 'src/repository/AttendanceRepository';
import { UserRepository } from 'src/repository/UserRepository';
import { AttendanceRepositoryImpl } from 'src/repositoryimpl/AttendanceRepositoryImpl';
import { UserRepositoryImpl } from 'src/repositoryimpl/UserRepositoryImpl';
import { AttendanceService } from 'src/service/AttendanceService';
import { expose, spawn, Thread, Worker } from 'threads';

@Injectable()
export class AttendanceServiceImpl implements AttendanceService {
  constructor(
    @Inject(AttendanceRepositoryImpl)
    private attendanceRepository: AttendanceRepository,
    @Inject(UserRepositoryImpl)
    private userRepository: UserRepository,
  ) {}
  getAll(condition?: any, option?: any) {
    return this.attendanceRepository.getAll(
      {},
      {
        include: [{ model: Break }, { model: BreakRequest }],
        offset: 0,
        limit: 20,
      },
    );
  }

  create(dto: AttendanceDTO, option?: any) {
    return this.attendanceRepository.create(dto, option);
  }

  bulkCreate() {
    try {
      this.executeBulkCreate();
    } catch (e) {
      this.executeBulkCreate();
    }
  }

  private async executeBulkCreate() {
    const users = (await this.userRepository.getAll()) as User[];
    for (let i = 1; i < 4; i++) {
      let cursor = 133;
      if (i > 1) {
        cursor = 1;
      }
      for (let count = cursor; count < users.length; count++) {
        const bulkArray: AttendanceDTO[] = [];
        for (let year = 2017; year <= 2022; year++) {
          for (let month = 1; month <= 12; month++) {
            const totalDay = new Date(year, month, 0).getDate();
            for (let day = 1; day <= totalDay; day++) {
              const tmp = new AttendanceDTO();
              tmp.timeCheckIn = '08:00';
              tmp.timeCheckOut = '17:00';
              tmp.timeCheckInRequest = '08:00';
              tmp.timeCheckOutRequest = '17:00';
              tmp.requestTime =
                year +
                '/' +
                month.toString().padStart(2, '0') +
                '/' +
                day.toString().padStart(2, '0') +
                ' ' +
                new Date().getHours().toString().padStart(2, '0') +
                ':' +
                new Date().getMinutes().toString().padStart(2, '0');
              tmp.day = day.toString().padStart(2, '0');
              tmp.month = month.toString();
              tmp.year = year.toString();
              tmp.reason = 'test vietnam04';
              tmp.status = Math.floor(Math.random() * 10);
              tmp.userId = users[count].id;
              const _break = new BreakDTO();
              const _breaks: BreakDTO[] = [];
              _break.start = '12:00';
              _break.end = '13:00';
              _breaks.push(_break);
              const _breakRequest = new BreakRequestDTO();
              const _breakRequests: BreakRequestDTO[] = [];
              _breakRequest.start = '12:00';
              _breakRequest.end = '13:00';
              _breakRequests.push(_breakRequest);
              bulkArray.push(tmp);
            }
          }
        }
        this.attendanceRepository.bulkCreate(bulkArray);
      }
    }
  }
}
