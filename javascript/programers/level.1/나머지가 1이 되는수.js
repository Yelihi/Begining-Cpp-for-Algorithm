// 내가 푼 풀이
function solution(n) {
  let x = 1;
  while (true) {
    if (n % x == 1) {
      break;
    }
    x++;
  }
  return x;
}

// 다른 사람 풀이
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
