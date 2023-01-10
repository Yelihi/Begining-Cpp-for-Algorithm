// 내가 푼 풀이
function solution(a, b, n) {
  let answer = 0;
  let rest = n;
  while (rest >= a) {
    answer += Math.floor(rest / a) * b;
    rest = Math.floor(rest / a) * b + (rest % a);
  }
  return answer;
}

// 다른 사람 풀이
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
