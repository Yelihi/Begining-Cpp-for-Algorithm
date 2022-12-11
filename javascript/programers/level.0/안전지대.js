// 내가 푼 풀이
function visit(n) {
  let visited = [];
  for (let i = 0; i < n.length; i++) {
    let row = [];
    for (let j = 0; j < n.length; j++) {
      row.push(0);
    }
    visited.push(row);
  }
  return visited;
}

function count(visited, i, j, board) {
  visited[i][j] = 1;
  let dx = [1, 1, 0, -1, -1, -1, 0, 1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  for (let k = 0; k < 8; k++) {
    let ny = i + dy[k];
    let nx = j + dx[k];
    if (nx < 0 || ny < 0 || nx >= board.length || ny >= board.length) continue;
    if (visited[ny][nx] == 0 && board[ny][nx] !== 1) {
      visited[ny][nx] = 1;
    }
  }
}

function solution(board) {
  let firstVisited = visit(board);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == 1) {
        count(firstVisited, i, j, board);
      }
    }
  }
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (firstVisited[i][j] == 0) {
        answer++;
      }
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x]) ? false : safezone++;
    })
  );

  return safezone;
}
