export declare class HomeController {
    getRootDir(): string;
    getDocs(version: any): {
        url: string;
    } | undefined;
    findOne(id: string): string;
    getCurrentTotalDay(): number;
    getCurrentTime(): Date;
}
