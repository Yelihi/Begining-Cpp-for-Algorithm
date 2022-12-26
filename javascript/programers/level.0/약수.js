// 내가 푼 풀이
function solution(n) {
  var answer = [];
  let index = 1;
  while (true) {
    if (index == n + 1) {
      break;
    }
    if (n % index == 0) {
      answer.push(index);
      answer.push(n / index);
    }
    index++;
  }
  let test = new Set(answer);
  return [...test].sort((a, b) => a - b);
}

// 다른 사람 풀이
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}

// 다른 사람 풀이
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i);
    }
  }

  return answer;
}
