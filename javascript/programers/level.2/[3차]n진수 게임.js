// 먼저 주어진 숫자에 대해서 분해하는 함수가 필요하다. (제일 중요)
// 그리고 주어진 숫자를 원하는 진수로 변경해준다음
// 0부터 그 숫자까지 배열을 생성한 뒤, 맨 처음 함수에 넣어준다
// 이 함수는 배열을 더 분리시켜주고, 다음에는 튜브의 순서대로 배열을 다시 만든다음 join 해준다.

function dist(number, k) {
  const result = [];
  const array = Array.from(
    new Array(number).fill(0).map((v, i) => i),
    (v) => v.toString(k).toUpperCase()
  );
  array.forEach((v) => result.push(...v.split("")));
  return result;
}

function solution(n, t, m, p) {
  const array = dist(t * m, n);
  const early = array.slice(0, t * m);
  let answer = "";

  for (let i = p - 1; i < early.length; i = i + m) {
    answer += early[i];
  }

  return answer;
}

// 다른 사람 풀이

function solution(n, t, m, p) {
  let res = "";
  let num = 0;
  let seq = "";
  while (res.length < t) {
    if (seq.length >= m) {
      res += seq[p - 1];
      seq = seq.slice(m);
    } else {
      seq += num.toString(n).toUpperCase();
      num++;
    }
  }
  return res;
}
