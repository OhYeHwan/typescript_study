{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type Node = {
    value: string;
    previous: Node | null;
  };

  class StackImpl implements Stack {
    constructor(readonly size: number = 10) {}

    private head: Node | null = null;

    push(value: string) {
      const node: Node = {
        value,
        previous: this.head,
      };
      this.head = node;
    }

    pop(): string {
      if (this.head === null) {
        throw new Error("Stack is Empty");
      }
      const value = this.head.value;
      this.head = this.head.previous;
      return value;
    }
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  // size에 대한 이해 부족
  class StackI implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    get size(): number {
      return this._size;
    }

    push(value: string) {
      const node: StackNode = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error("Stack is Empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
}
