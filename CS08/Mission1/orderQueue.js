class OrderQueue {
  constructor() {
    this.list = [];
    this.orderQuantity = 0;
  }

  get queue() {
    return this.list;
  }

  get isEmpty() {
    return this.list.length <= 0;
  }

  setOrderQuantity(order) {
    this.orderQuantity = order.quantity;
  }

  enqueue(order) {
    for (let i = 0; i < order.quantity; i++) {
      this.list.push(order.drink);
    }
  }

  dequeue() {
    this.list.shift();
  }

  work(order) {
    this.setOrderQuantity(order);
    this.enqueue(order);
  }
}

module.exports = OrderQueue;
