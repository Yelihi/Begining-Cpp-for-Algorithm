// 내가 푼 풀이
function solution(keyinput, board) {
  let maxWidth = (board[0] - 1) / 2;
  let maxHeight = (board[1] - 1) / 2;
  let start = [0, 0];

  for (let i of keyinput) {
    switch (i) {
      case "left": {
        start[0] === -maxWidth ? start[0] : start[0]--;
        break;
      }
      case "right": {
        start[0] === maxWidth ? start[0] : start[0]++;
        break;
      }
      case "up": {
        start[1] === maxHeight ? start[1] : start[1]++;
        break;
      }
      case "down": {
        start[1] === -maxHeight ? start[1] : start[1]--;
        break;
      }
    }
  }
  return start;
}

// 다른사람이 푼 풀이
const CONTROL = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};

function solution(key, [n, m]) {
  const [x1, x2] = [-(n - 1) / 2, (n - 1) / 2];
  const [y1, y2] = [-(m - 1) / 2, (m - 1) / 2];
  return key.reduce(
    ([x, y], k) => {
      const [nx, ny] = [x + CONTROL[k][0], y + CONTROL[k][1]];
      if (x1 <= nx && nx <= x2 && y1 <= ny && ny <= y2) return [nx, ny];
      return [x, y];
    },
    [0, 0]
  );
}
