// dfs 로 푸는 문제
// 초반에 생각했던 로직이 맞지만 구현능력이 딸려서 실패했던 문제
// 계속 복습하자

// 우선 간단히 푸는 방법

function solution(numbers, target) {
  let answer = 0;
  let length = numbers.length;
  function DFS(L, sum) {
    if (L === length) {
      if (sum === target) {
        answer++;
      }
    } else {
      DFS(L + 1, sum + numbers[L]);
      DFS(L + 1, sum - numbers[L]);
    }
  }
  DFS(0, 0);
  return answer;
}

// 이진트리 구현방법

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        if (node.left === null) {
          let leftNode = new Node(-value);
          let rightNode = new Node(value);
          node.left = leftNode;
          node.right = rightNode;
        }
      }
      traverse(current);
      return this;
    }
  }

  DFS(target) {
    let count = 0;
    let data = 0;
    let current = this.root;
    function traverse(node) {
      data = data + node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (node.left === null) {
        if (target === data) {
          count++;
        }
      }
      data = data - node.value;
    }
    traverse(current);
    return count;
  }
}

function solution(numbers, target) {
  let answer = 0;

  let root = new BinarySearchTree();
  root.insert(0);
  for (const num of numbers) {
    root.insert(num);
  }

  answer = root.DFS(target);
  return answer;
}
