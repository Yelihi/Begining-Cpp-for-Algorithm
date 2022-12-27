//내가 푼 풀이
function solution(n) {
  let answer = 1;
  while (n) {
    if ((answer + "").includes("3") || answer % 3 == 0) {
      answer += 1;
      continue;
    }
    if (n == 1) {
      break;
    }
    answer += 1;
    n--;
  }
  return answer;
}

//다른 사람 풀이
function solution(n) {
  return [...Array(n * 3)].map((_, i) => i + 1).filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}
