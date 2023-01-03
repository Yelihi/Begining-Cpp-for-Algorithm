// 내가 푼 풀이
function solution(s) {
  let answer = s
    .split("")
    .sort((a, b) => (b < a ? -1 : 1))
    .join("");
  return answer;
}

// 다른 사람 풀이
