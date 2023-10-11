/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    if(this.isEmpty()){
      const n = new Node(val)
      this.first = n
      this.last = n
      this.size++
      return
    }

    const n = new Node(val)
    n.next = this.first
    this.first = n
    this.size++
    return 
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.isEmpty()) throw new Error('Stack is empty. Cannot Pop.')

    if(this.first === this.last){
      const n = this.last
      this.first = null
      this.last = null
      this.size --
      return n.val
    }

    const f = this.first
    this.first = f.next
    this.size--

    return f.val
    
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.first && this.last) return false;
    return true;
  }
}

module.exports = Stack;
