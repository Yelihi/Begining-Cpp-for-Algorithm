// 내가 푼 풀이 이자 비트연산자 활용하기
function solution(n, arr1, arr2) {
  for (let i = 0; i < n; i++) {
    answer.push(arr1[i] | arr2[i]);
  }
  let two = answer.map((v) => v.toString(2).padStart(n, "0").replace(/1/g, "#").replace(/0/g, " "));
  return two;
}

// 다른 사람 풀이
var solution = (n, a, b) => a.map((a, i) => (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#"));

// 다른 사람 풀이
// 0을 추가하는 것을 따로 처리
function solution(n, arr1, arr2) {
  return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) => (+a ? "#" : " ")));
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
