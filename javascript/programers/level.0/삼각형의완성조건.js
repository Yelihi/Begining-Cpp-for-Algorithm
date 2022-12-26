// 내가 푼 풀이
function solution(sides) {
  let copy = sides.sort((a, c) => a - c);
  let min = copy[1] - copy[0];
  let max = copy[0] + copy[1];
  return max - min - 1;
}

//다른 사람 풀이
// 수학 풀이인듯 하다.
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
