// 숫자는 배열이 아님. 그런데 그 숫자에 자리수를 찾는 문제
// 내가 푼 풀이
function solution(num, k) {
  let arr = Array.from(num + "").map((v) => v - 0);
  let answer = [];
  return arr.filter((v, i) => {
    if (v === k) {
      answer.push(i);
      return true;
    }
    return false;
  }).length
    ? answer[0] + 1
    : -1;
}

// 다른 사람 풀이
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}
