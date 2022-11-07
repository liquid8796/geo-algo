import { AttendanceDTO } from 'src/model/AttendanceDTO';
import { BaseRepository } from './BaseRepository';

export interface AttendanceRepository extends BaseRepository {
  bulkCreate(source: AttendanceDTO[], option?: any): any;
}
