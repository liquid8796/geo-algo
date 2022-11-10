import { Injectable } from '@nestjs/common';
import { RecursiveAlgorithmService } from 'src/service/Algorithm/RecursiveAlgorithmService';

@Injectable()
export class RecursiveAlgorithmServiceImpl
  implements RecursiveAlgorithmService
{
  RecursiveBinarySum(list: any): number {
    return this.studentPointRecursiveFunction(0, list.length - 1, list);
  }

  private studentPointRecursiveFunction(
    low: number,
    high: number,
    list: any[][],
  ): number {
    if (low == high) return list[low][1];
    else {
      const mid = Math.floor((low + high) / 2);

      return (
        this.studentPointRecursiveFunction(low, mid, list) +
        this.studentPointRecursiveFunction(mid + 1, high, list)
      );
    }
  }
}
