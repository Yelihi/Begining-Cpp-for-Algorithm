// 내가 푼 풀이
function solution(arr, divisor) {
  let answer = arr.filter((v, i) => v % divisor === 0).sort((a, b) => a - b);
  return answer.length == 0 ? [-1] : answer;
}

// 다른 사람 풀이
