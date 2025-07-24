/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
    private items: number [] = [];


  push(n: number): void {
    this.items.push(n);
  }
  

  pop(): number | string {
    return this.items.length == 0 ? "Underflow" : this.items.pop()!;
  }

  peek(): number | string {
      return this.items.length === 0
        ? "Stack is empty"
        : this.items[this.items.length - 1];
    }
  }

export { Stack };
