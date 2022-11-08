import { BreakDTO } from './BreakDTO';
import { BreakRequestDTO } from './BreakRequestDTO';

export class AttendanceDTO {
  id: number;
  timeCheckIn: string;
  timeCheckOut: string;
  timeCheckInRequest: string;
  timeCheckOutRequest: string;
  totalBreakTimeRequest: string;
  totalWorkTimeRequest: string;
  day: string;
  month: string;
  year: string;
  reason: string;
  rejectReason: string;
  requestTime: string;
  userId: number;
  rejectByUserId: number;
  // breaks: BreakDTO[];
  // breakRequests: BreakRequestDTO[];
  status: number;
}
