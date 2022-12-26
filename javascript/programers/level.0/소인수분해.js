// 내가 푼 풀이
function solution(n) {
  let answer = [];
  let total = n;
  for (let i = 2; i <= n; i++) {
    while (total % i == 0) {
      total /= i;
      answer.push(i);
    }
  }
  s = new Set(answer);
  return [...s];
}

// 다른 사람 풀이
function solution(n) {
  let s = new Set();

  while (n % 2 === 0) {
    n /= 2;
    s.add(2);
  }

  for (let i = 3; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      n /= i;
      s.add(i);
    }
  }

  if (n > 2) s.add(n);

  return [...s];
}
