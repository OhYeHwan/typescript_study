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
}
