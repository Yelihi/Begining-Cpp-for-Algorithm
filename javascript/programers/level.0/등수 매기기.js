// 내가 푼 방법

function solution(score) {
  var answer = [];
  let ranking = {};
  let sumScore = score.map((v) => v[0] + v[1]);
  [...sumScore]
    .sort((a, b) => b - a)
    .forEach((v, i) => {
      if (!ranking[v]) {
        ranking[v] = i + 1;
      }
    });
  answer = sumScore.map((v) => ranking[v]);

  return answer;
}

// 다른 좋은 풀이

function solution(score) {
  return score.map((el) => {
    return score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1;
  });
}
