// 내가 푼 풀이
function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length - (p.length - 1); i++) {
    let string = t;
    let left = Number(string.substring(i, i + p.length));
    if (Number(p) >= left) {
      answer += 1;
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
