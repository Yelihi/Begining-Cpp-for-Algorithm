// 나만 재귀를 쓴 것인가... 엉망
function solution(n, a, b) {
  let round = 0;

  function upToRound(a, b) {
    let even, odd;
    if (a % 2 == 0) {
      even = a;
      odd = b;
    }
    if (b % 2 == 0) {
      even = b;
      odd = a;
    }
    if (Math.abs(a - b) == 1 && even > odd) {
      round += 1;
      return;
    }
    if (a % 2 == 0) a += 1;
    if (b % 2 == 0) b += 1;
    round += 1;
    upToRound(a / 2, b / 2);
    return;
  }

  upToRound(a, b);
  return round;
}

// 다른사람의 Math.ceil 를 활용한 풀이
function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
