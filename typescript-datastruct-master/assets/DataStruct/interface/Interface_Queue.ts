export interface Interface_Queue<E_Type> {
    getSize(): number;
    isEmpty(): boolean;
    enqueue(e: E_Type): void;
    dequeue(): E_Type;
    getFront(): E_Type;
}