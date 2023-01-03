// 내가 푼 풀이
function solution(n) {
  return (n + "")
    .split("")
    .map((n) => n - 0)
    .reverse();
}

// 다른 사람 풀이
function solution(n) {
  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
