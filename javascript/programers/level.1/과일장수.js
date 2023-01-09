// 내가 푼 풀이
function solution(k, m, score) {
  let answer = 0;
  // 점수는 1점부터 k 점까지
  // 1점상자는 최대 m 까지 답을 수 있다. 즉 1 * m
  // 이후 부터는 n 이라 했을 때 n 이상의 수를 최대한 m 개 찾아서 구하게 된다. 혹은 상자의 갯수에 따라 달라질 것이다.
  let table = {};
  // 우선 테이블로 점수를 정리하자
  for (let i = 0; i < score.length; i++) {
    if (!table[score[i]]) table[score[i]] = 0;
    table[score[i]]++;
  }
  // 점수가 나왔으니 이제 숫자 m 을 통해 나누어 주자.
  // 정답 변수에 하나하나 추가해가자. 키의 배열을 역으로 만들자
  let keyArr = Object.keys(table).sort((a, b) => b - a);
  let rest = 0;
  keyArr.forEach((key, i) => {
    answer += key * m * Math.floor((table[key] + rest) / m);
    rest = (table[key] + rest) % m;
  });
  return answer;
}

// 다른 사람 풀이
function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
