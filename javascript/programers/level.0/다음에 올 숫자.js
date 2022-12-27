// 내가 푼 풀이
function solution(common) {
  var answer = 0;
  let check = common[1] - common[0] === common[2] - common[1] ? common[1] - common[0] : common[1] / common[0];
  answer = common[1] - common[0] === common[2] - common[1] ? common[common.length - 1] + check : common[common.length - 1] * check;
  return answer;
}

// 다른 사람 풀이
var solution = (q) => {
  var [a, b, c] = q;
  return a + c == 2 * b ? q.pop() + b - a : (q.pop() * b) / a;
};
