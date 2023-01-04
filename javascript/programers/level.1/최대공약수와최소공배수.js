// 내가 푼 풀이
function gcd(a, b) {
  if (a % b == 0) return b;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

// 다른 사람이 푼 풀이
function solution(n, m) {
  let gcd = 1;
  for (let i = 1; i < n + 1; i++) {
    if (n % i == 0 && m % i == 0) {
      gcd = i;
      break;
    }
  }
  let lcm = (n * m) / gcd;
  return [gcd, lcm];
}
