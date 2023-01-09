// 내가 푼 풀이
function solution(absolutes, signs) {
  let answer = absolutes.reduce((acc, cur, i) => (signs[i] === true ? (acc += cur) : (acc -= cur)), 0);
  return answer;
}
