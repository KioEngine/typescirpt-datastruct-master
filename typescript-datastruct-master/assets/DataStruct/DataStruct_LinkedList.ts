//链表
export class DataStruct_LinkedList<E_Type> {

    private head: Node;
    private size: number;

    public constructor() {
        this.head = null;
        this.size = 0;
    }

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size == 0;
    }

    public addFirst(e: E_Type): void {
        let node = new Node(e);
        node.next = this.head;
        this.head = node;
    }

    public add(index: number, e: E_Type): void {
        if (index < 0 || index > this.size) {
            console.error("LogError:Add failed.Require index >=0 and index<size.");
            return;
        }
        if (index == 0) {
            this.addFirst(e);
        } else {
            let pre: Node = this.head;
            for (let i = 0; i < index - 1; i++) {
                pre = pre.next;
            }
            pre.next = new Node(e, pre.next);
            this.size++;
        }
    }

    public addLast(e: E_Type) {
        this.add(this.size, e);
    }
}


export class Node {

    public element: any;
    public next: Node;

    constructor(e: any, next: Node = null) {
        this.element = e;
        this.next = next;
    }
}
