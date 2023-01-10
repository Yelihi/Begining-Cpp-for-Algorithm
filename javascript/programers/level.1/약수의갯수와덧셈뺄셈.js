// 내가 푼 풀이
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let odd = false;
    let number = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        number += 1;
      }
    }
    number % 2 == 0 ? (odd = false) : (odd = true);
    odd == false ? (answer += i) : (answer -= i);
  }
  return answer;
}

// 다른 사람 풀이.
// 제곱근이 정수면 약수의 갯수가 홀수다. 라는 성질을 이용한 풀이
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
