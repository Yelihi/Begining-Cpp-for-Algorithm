// 내가 푼 풀이
function solution(N, stages) {
  var answer = [];
  let map_number = new Map();
  for (let i = 1; i < N + 1; i++) {
    let noClear = stages.filter((v) => v == i).length == 0 ? 0 : stages.filter((v) => v == i).length;
    let enterStage = stages.length - stages.filter((v) => v <= i - 1).length;
    let fail_num = noClear == 0 ? 0 : noClear / enterStage;
    map_number.set(i, fail_num);
  }
  let arr = Array.from(map_number.entries()).sort((a, b) => b[1] - a[1]);
  for (let a of arr.values()) {
    answer.push(a[0]);
  }
  return answer;
}

// 다른 사람 풀이
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
