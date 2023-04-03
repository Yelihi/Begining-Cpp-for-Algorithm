/**
 * 간단한 문제인데, 오랜만에 풀어서인지 오래걸렸다
 * 언제나 정규식은 햇갈린다.
 * 문제를 제대로 집중해서 읽지를 못해 오래걸렸다. 다음부터는 문제를 읽자
 */

function solution(s) {
  var answer = [];
  let copy = s;
  let time = 0;
  let zeroLength = 0;
  while (copy !== "1") {
    let a = copy.replace(/0/g, "");
    zeroLength += copy.length - a.length;
    copy = a.length.toString(2);
    time++;
  }
  answer.push(time);
  answer.push(zeroLength);
  return answer;
}
