// 내가 푼 풀이
function solution(board) {
  var answer = 0;
  let visited = [];
  for (let i = 0; i < board; i++) {
    let row = [];
    for (let j = 0; j < board; j++) {
      row.push(0);
    }
    visited.push(row);
  }
  console.log(visited);
  return answer;
}
