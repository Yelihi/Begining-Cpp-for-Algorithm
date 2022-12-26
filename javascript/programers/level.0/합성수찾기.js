// 내가 푼 풀이
function solution(n) {
  var answer = 0;
  let number = n;
  while (true) {
    if (number == 0) break;

    let arr = Array(number)
      .fill(0)
      .map((v, i) => v + i + 1)
      .filter((v) => number % v == 0);
    if (arr.length >= 3) {
      answer += 1;
    }
    number--;
  }
  return answer;
}

// 다른 사람이 푼 풀이
