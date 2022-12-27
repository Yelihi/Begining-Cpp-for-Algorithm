// 내가 푼 풀이
function solution(A, B) {
  let arr = A.split("");
  let count = A.length;
  let answer = 0;
  while (true) {
    if (!count) {
      answer = -1;
      break;
    }
    if (arr.join("") === B) {
      break;
    }
    arr.unshift(arr.pop());
    count--;
    answer++;
  }
  return answer;
}

//다른 사람이 푼 풀이
let solution = (a, b) => (b + b).indexOf(a);

//다른 사람이 푼 풀이
var solution = (A, B) =>
  new Array(A.length)
    .fill(A)
    .map((s, i) => s.slice(A.length - i) + s.slice(0, A.length - i))
    .indexOf(B);
