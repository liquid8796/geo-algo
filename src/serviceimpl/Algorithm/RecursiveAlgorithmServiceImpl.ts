import { Injectable } from '@nestjs/common';
import { RecursiveAlgorithmService } from 'src/service/Algorithm/RecursiveAlgorithmService';

@Injectable()
export class RecursiveAlgorithmServiceImpl
  implements RecursiveAlgorithmService
{
  RecursiveBinarySum(list: any): number {
    return this.StudentPointRecursiveFunction(0, list.length - 1, list);
  }

  private StudentPointRecursiveFunction(
    low: number,
    high: number,
    list: any[][],
  ): number {
    if (low == high) return list[low][1];
    else {
      const mid = Math.floor((low + high) / 2);

      return (
        this.StudentPointRecursiveFunction(low, mid, list) +
        this.StudentPointRecursiveFunction(mid + 1, high, list)
      );
    }
  }
}
