export interface Interface_Stack<E_Type> {
    getSize(): number;
    isEmpty(): boolean;
    push(e: E_Type): void;
    pop(): E_Type;
    peek(): E_Type;
}