import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentPointRecursiveFunction implements RecursiveFunction {
  recursiveFunction(low: number, high: number, list: any[][]): number {
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
