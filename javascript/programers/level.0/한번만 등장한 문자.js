// 내가 푼 풀이
function solution(s) {
  let answer = [];
  let table = {};
  for (let i of s) {
    if (!table[i]) {
      table[i] = 1;
      continue;
    }
    table[i]++;
  }
  for (let v of Object.entries(table)) {
    if (v[1] == 1) {
      answer.push(v[0]);
    }
  }
  return answer.sort().join("");
}

//다른 사람이 푼 풀이
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
