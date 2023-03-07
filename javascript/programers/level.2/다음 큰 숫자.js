function solution(n) {
  // 문제에서 구하고자 하는 것은 1의 갯수가 같은 그 다음의 최소숫자
  // 따라서 같은 1이 나올때까지 1씩 더해주자
  // 1씩 증가될 정답을 먼저 선언해준다
  let answer = n;
  // 주어진 n 의 1의 갯수를 저장한다. reaplceAll 은 시간복잡도가 O(n) 이다. 큰 무리 없을듯하다
  const defaultLength = n.toString(2).replaceAll("0", "").length;
  // 조건에 해당할때까지 계속해서 1씩 증가시켜야 한다.
  while (true) {
    answer++;
    // O(n) 의 과정을 지속적으로 실행은 하되, O(n^2) 은 나오지 않는다.
    // 이미 그 전에 루프가 종료될 것이다.
    let nextLength = answer.toString(2).replaceAll("0", "").length;
    // 1의 갯수가 같다면 무한루프를 탈출한다.
    if (defaultLength === nextLength) {
      break;
    }
  }
  return answer;
}

// 다른사람 풀이

function nextBigNumber(n) {
  var i, j;
  for (i = 0; !(n & 1); i++) {
    n = n >> 1;
  } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
  for (j = 0; n & 1; i++, j++) {
    n = n >> 1;
  } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
  for (j--, n++; i !== j; i--) {
    n = n << 1;
  } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
  for (i; i; i--, n++) {
    n = n << 1;
  } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
  return n;
}
