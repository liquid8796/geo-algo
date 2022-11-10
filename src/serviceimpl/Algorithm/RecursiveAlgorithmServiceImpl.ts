import { Injectable } from '@nestjs/common';
import { RecursiveAlgorithmService } from 'src/service/Algorithm/RecursiveAlgorithmService';

@Injectable()
export class RecursiveAlgorithmServiceImpl
  implements RecursiveAlgorithmService
{
  RecursiveBinarySum(list: any): number {
    return this.recursiveFunction(0, list.length - 1, list);
  }

  private recursiveFunction(low: number, high: number, list: any[][]): number {
    if (low == high) return list[low][1];
    else {
      const mid = Math.floor((low + high) / 2);

      return (
        this.recursiveFunction(low, mid, list) +
        this.recursiveFunction(mid + 1, high, list)
      );
    }
  }
}
