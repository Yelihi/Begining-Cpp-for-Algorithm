// 내가 푼 풀이
function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; i = i + n) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(num_list[i + j]);
    }
    answer.push(row);
  }
  return answer;
}

// 다른사람이 푼 풀이
function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}
