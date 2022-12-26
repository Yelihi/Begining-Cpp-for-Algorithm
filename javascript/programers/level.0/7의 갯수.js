// 내가 푼 풀이
function solution(array) {
  let answer = array.map((v) => v + "").map((s) => s.split("").filter((si) => si === "7").length);
  return answer.reduce((a, c) => a + c);
}

// 다른 사람 풀이
function solution(array) {
  return array.join("").split("7").length - 1;
}
