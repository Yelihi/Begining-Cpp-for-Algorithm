// 내가 푼 풀이
function solution(a, b) {
  let answer = 0;
  let x;
  let y;
  a > b ? ((x = b), (y = a)) : ((x = a), (y = b));
  for (let i = x; i <= y; i++) {
    answer += i;
  }
  return answer;
}

// 다른 사람 풀이 - 수학 공식을 활용
function adder(a, b) {
  var result = 0;
  //함수를 완성하세요

  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

// 다른 풀이
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
