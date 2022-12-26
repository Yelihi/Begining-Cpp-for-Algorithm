// 내가 푼 풀이
function factor(n) {
  if (n == 0 || n == 1) return 1;
  return n * factor(n - 1);
}

function solution(n) {
  let answer = 0;
  let i = 0;
  while (true) {
    if (n < factor(i)) {
      answer = i - 1;
      break;
    }
    i++;
  }
  return answer;
}

// 다른 사람 풀이
function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}
