class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i += 1) {
    queue.enqueue([priorities[i], i]);
  }
  priorities.sort((a, b) => b - a); // keypoint 아이디어. 우선순위를 할 때 인덱스와 정렬을 이용하자.
  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count++;
      if (value[1] === location) {
        return count;
      }
    }
  }
}
