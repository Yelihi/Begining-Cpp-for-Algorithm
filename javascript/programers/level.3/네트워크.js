class DirectedGraph {
  constructor() {
    this.edges = {};
  }

  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  addEdge(vertex1, vertex2, weight) {
    if (weight === undefined) {
      weight = 0;
    }

    // 방향성이 있다. 1 -> 2 로만
    this.edges[vertex1][vertex2] = weight;
  }

  // 외부에서 visited 를 받아와야 하는 이유는
  // 반복을 돌면서 DFS 를 돌려줄 것이기 때문
  traverseDFS(vertex, visited) {
    let result = false;
    // true 가 되는 경우는 실제 탑색을 했을 경우에만
    // 그리고 탐색을 맞출 시기쯔음에는 시작 vertex 와 연결된 모든 지역을 다 탐색
    // 즉 visited 가 모두 true 로 되어있을 것임
    result = this._traverseDFS(vertex, visited);
    return result;
  }

  _traverseDFS(vertex, visited) {
    // 전달받은 visited 내에 key 값으로 vertex 가 없다면, 완전 첫번째 시작이니
    // result 를 true 로 해준다.
    // 이렇게 안해주면 밑에 반복문의 조건문에서 걸리게 된다.
    // 예를 들어서 2번 vertex 는 다른 vertex 와 연결되지 않았다고 가정하면
    // DFS 를 실행하자마자 visited[2] 가 true 가 되기 떄문이다.
    let result = false;
    if (visited[vertex] === undefined) {
      // 초기에는 이렇게 해준다.
      result = true;
    }
    visited[vertex] = true;
    // vertex 와 연결된 다른 vertex 들을 순회하면서 방문한 적이 없다면
    // 재귀함수를 호출시킨다.
    // 재귀함수의 호출이 마무리 되면, 밑 result = true 가 마지막에 실행된다.
    for (let adjacentVertex in this.edges[vertex]) {
      if (!visited[adjacentVertex]) {
        this._traverseDFS(adjacentVertex, visited);
        result = true;
      }
    }
    return result;
  }
}

function solution(n, computers) {
  let count = 0;
  let visited = {};

  const graph = new DirectedGraph();

  // vertex 와 edges 를 연결시켜준다.
  for (let i = 0; i < n; i++) {
    graph.addVertex(i);
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1) {
        graph.addEdge(i, j);
      }
    }
  }

  // vertex 마다 순회를 돌면서 DFS 를 돌려준다.
  for (let i = 0; i < n; i++) {
    if (graph.traverseDFS(i, visited)) {
      count++;
    }
  }

  return count;
}

// 다른 사람 풀이

function solution(n, computers) {
  var answer = 0;
  // 이 사람은 visited 를 배열로 만들었다.
  var isVisited = [];

  // 순회를 돌면서 false 를 넣어준다.
  for (var i = 0; i < n; i++) {
    isVisited.push(false);
  }

  // DFS 함수를 정의한다
  var DFS = function (computers, i) {
    console.log("DFS excuted");
    // 만약 visited 가 true 이면 함수를 return 한다.
    if (isVisited[i]) {
      return;
    }
    isVisited[i] = true;
    console.log(isVisited);

    // 순회를 돌아준다. 전달받은 i vertex 와 연결된 vertex 를 순회한다
    // 만일 연결되어있다면, 연결된 vertex 로 이동하여 DFS 를 돌아준다.
    for (var j = 0; j < computers.length; j++) {
      if (computers[i][j] === 1) {
        console.log(i + ", " + j);
        console.log("connected");
        DFS(computers, j);
      }
    }
  };

  // 위 DFS 를 돌게되면 visited 가 모두 작성이 되게 된다.

  for (var i = 0; i < n; i++) {
    // 순서가 중요하다. 즉, 처음 false 라면 DFS 를 돌린다.
    // 이후 두번째 vertex 가 true 라면 생략하고, 다음 vertex 로 넘어간다.
    if (!isVisited[i]) {
      answer++;
      console.log(isVisited, "도입부");
      console.log(answer);
      DFS(computers, i);
    }
  }

  return answer;
}

// 다른 사람 풀이
function solution(n, computers) {
  var answer = 0;
  let start = 0;
  let visited = [];
  for (let i = 0; i < n; i++) {
    visited.push(0);
  }
  for (let i = 0; i < visited.length; i++) {
    // 역시 같은 논리다. 방문하지 않았다면 dfs 를 돌린다.
    // 방문했다면 dfs 를 생략한다.
    if (visited[i] === 0) {
      console.log(visited);
      dfs(computers, visited, start);
      answer++;
    }
    start++;
  }
  return answer;
}

function dfs(computers, visited, start) {
  // stack 으로 구현한 dfs 이다.
  let stack = [start];
  // 스택에 스타트 지점을 설정해주고,
  let stlen = stack.length;
  while (stlen--) {
    // pop 을 해준다.
    let j = stack.pop();
    // 방문 기록을 해준뒤
    visited[j] = 1;
    console.log("visited:" + j + "/stlen:" + stlen);
    // vertex 만큼 반복문을 돌려준다.
    for (let i = 0; i < computers.length; i++) {
      console.log("i,j:" + computers[j][i]);
      // 만일 연결되어있고, 방문한 적이 없다면 스택에 푸시해준다.
      if (computers[j][i] === 1 && visited[i] === 0) {
        stack.push(i);
        // 스택 길이를 다시 선정한다.
        stlen = stack.length;
      }
    }
  }
}

// 다른 사람 풀이

function solution(n, computers) {
  var answer = 0;

  var visited = Array.apply(null, Array(n)).map(function (item) {
    return false;
  });

  function dfs(node) {
    for (var i = 0; i < n; i++) {
      if (computers[node][i]) {
        if (!visited[i]) {
          visited[i] = true;
          dfs(i);
        }
      }
    }
  }

  for (var j = 0; j < n; j++) {
    if (!visited[j]) {
      answer++;
      visited[j] = true;
      dfs(j);
    }
  }

  return answer;
}
