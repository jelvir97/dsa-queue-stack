/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if(this.isEmpty()){
      const n = new Node(val)
      this.first = n
      this.last = n
      this.size++
      return 
    }

    const n = new Node(val)
    this.last.next = n
    this.last = n
    this.size++
    return 
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.isEmpty()) throw new Error("Queue is empty. Cannot Dequeue")

    const f = this.first
    this.first = f.next
    this.size--
    return f.val
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.first && this.last) return false;
    return true;
  }
}

module.exports = Queue;
