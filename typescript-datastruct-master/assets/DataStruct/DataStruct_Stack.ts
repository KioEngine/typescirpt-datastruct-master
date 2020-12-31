import { Interface_Stack } from "./interface/Interface_Stack";

export class DataStruct_Stack <E_Type> implements Interface_Stack<E_Type>{
    getSize(): number {
        throw new Error("Method not implemented.");
    }
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    push(e: E_Type): void {
        throw new Error("Method not implemented.");
    }
    pop(): E_Type {
        throw new Error("Method not implemented.");
    }
    peek(): E_Type {
        throw new Error("Method not implemented.");
    }

}
