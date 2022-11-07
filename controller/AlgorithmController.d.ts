export declare class AlgorithmController {
    executeAlgo(list: any[]): {
        result: {
            index: number;
            total: number;
        };
        time: number;
    };
    test(): number[][][];
    main(students: any[]): number[];
    binaryStudentSum(list: any[][], type: number): number;
    recursiveStudentSum(low: number, high: number, list: number[][], type: number): number;
    removeItem<T>(arr: Array<T>, value: T): void;
}
