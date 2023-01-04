//내가 푼 풀이
function isPrime(num) {
  if (num == 1) return 0;
  if (num <= 3) return 1;

  if (num % 2 == 0) return 0;

  for (let i = 2; i * i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }

  return 1;
}

function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    answer += isPrime(i);
  }
  return answer;
}

// 다른사람 풀이
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
