export class DataStruct_Array<E_Type> {
    private data: Array<E_Type>;
    private size: number;

    // constructor();
    // constructor(capacity: number)
    constructor(capacity: number) {
        this.data = new Array<E_Type>(capacity);
    }

}
