// 내가 푼 풀이
function check(n) {
  let answer = 1;
  while (n % 2 === 0) {
    n /= 2;
  }
  while (n % 5 === 0) {
    n /= 5;
  }
  answer = n;
  return answer;
}

function solution(a, b) {
  // 분모가 2 나 5를 소인수로 가지지 않는다면 무조건 무한소수
  // 또한 2,5 를 제외한 소인수가 존재하면 안됨.
  // 따라서 분모를 먼저 2와 5로 최대한 나눈 뒤, 남은 수를
  // 분자에게 나누었을 때 나머지가 없다면 유한소수
  // 아니라면 무한소수
  let rest = check(b);
  if (a % rest === 0) return 1;
  return 2;
}

// 다른 사람 풀이
// 나눈 숫자값에 fix 를 때려서 숫자를 고정시킨 뒤, 실제 나눈 값과 비교하는 방식. 신박하다.
function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}
