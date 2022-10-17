const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }
 

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.queue) {
      let current = this.queue;
      while(current['next'] !== null) {
        current = current['next'];
      }
      current['next'] =  new ListNode(value);   
    } else {
      this.queue = new ListNode(value);
    }
  }

  dequeue() {
    let current = this.queue;
    this.queue = current.next
    return current.value;
  }
}

module.exports = {
  Queue
};
