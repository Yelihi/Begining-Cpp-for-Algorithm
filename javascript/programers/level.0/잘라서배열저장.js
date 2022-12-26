// 내가 푼 풀이
// 이상하게도 substr 은 잘 작동을 안한다.
function solution(my_str, n) {
  var answer = [];
  for (let i = 0; i < my_str.length; i = i + n) {
    answer.push(my_str.substring(i, i + n));
  }
  return answer;
}

// 다른 사람 풀이
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
