export interface BaseRepository {
    getAll(condition?: any, option?: any): any;
    findById(id: number, option?: any): any;
    create(object: any, option?: any): any;
    update(object: any): any;
    deleteById(id: number): any;
}
