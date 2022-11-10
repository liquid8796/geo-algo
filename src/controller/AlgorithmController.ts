import { Body, Controller, Get, Inject, Query } from '@nestjs/common';
import { RecursiveAlgorithmService } from 'src/service/Algorithm/RecursiveAlgorithmService';
import { RecursiveAlgorithmServiceImpl } from 'src/serviceimpl/Algorithm/RecursiveAlgorithmServiceImpl';

const S = [
  [
    [113, 10],
    [499, 6],
    [377, 5],
  ],
  [
    [224, 8],
    [761, 10],
    [174, 1],
  ],
  [
    [700, 2],
    [999, 10],
    [871, 10],
  ],
  [
    [113, 10],
    [114, 9],
    [115, 7],
  ],
];

@Controller('algo')
export class AlgorithmController {
  constructor(
    @Inject(RecursiveAlgorithmServiceImpl)
    private recursiveAlgorithmService: RecursiveAlgorithmService,
  ) {}
  @Get('/generate')
  generateListStudents(@Query('n') n: number, @Query('q') q: number) {
    let result: any[][][] = [[[]]];
    for (let i = 0; i < n; i++) {
      result[i] = [];
      for (let j = 0; j < q; j++) {
        result[i][j] = [];
        result[i][j][0] = Math.floor(Math.random() * 1000);
        result[i][j][1] = Math.floor(Math.random() * 11);
      }
    }
    return result;
  }

  @Get('/run')
  executeAlgo(@Body() list: any[]) {
    const startTime = performance.now();
    const result = this.main(list);
    const endTime = performance.now();
    return {
      result: result,
      time: endTime - startTime,
    };
  }

  @Get('/test')
  test() {
    this.removeItem(S[0][0], 174);
    return S;
  }

  main(students: any[]) {
    let minTime: number[] = [];
    let totalPoint: number[] = [];
    for (let i = 0; i < students[0].length; i++) {
      for (let j = 0; j < students.length; j++) {
        if (totalPoint[j] !== null) {
          // totalPoint[j] = this.binaryStudentSum(students[j], 1);
          // totalPoint[j] = this.recursiveAlgorithmService.RecursiveBinarySum(
          //   students[j],
          // );
          totalPoint[j] = this.sumStudent(students[j]);
        }
        if (j > 0) {
          if (minTime[i] > students[j][i][0]) {
            minTime[i] = students[j][i][0];
          }
        } else {
          minTime[i] = students[j][i][0];
        }
      }
      for (let i = 0; i < students[0].length; i++) {
        for (let j = 0; j < students.length; j++) {
          if (minTime[i] === students[j][i][0] && students[j][i][1] === 10) {
            totalPoint[j]++;
          }
        }
      }
    }
    return totalPoint
      .map((e) => {
        return { index: totalPoint.indexOf(e), total: e };
      })
      .filter((e) => e.total === Math.max(...totalPoint));
  }

  sumStudent(list: any[][]) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      total += list[i][1];
    }
    return total;
  }

  removeItem<T>(arr: Array<T>, value: T) {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
}
