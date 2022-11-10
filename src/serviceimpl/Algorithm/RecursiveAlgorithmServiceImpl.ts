import { Injectable } from '@nestjs/common';
import { RecursiveAlgorithmService } from 'src/service/Algorithm/RecursiveAlgorithmService';

@Injectable()
export class RecursiveAlgorithmServiceImpl
  implements RecursiveAlgorithmService
{
  RecursiveBinarySum(list: any, recursiveFunction: Function): number {
    return recursiveFunction(0, list.length - 1, list);
  }
}
