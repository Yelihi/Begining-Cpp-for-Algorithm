//내가 푼 풀이
function solution(n) {
  let three = n.toString(3).split("").reverse().join("");
  return parseInt(three, 3);
}

//다른 풀이
function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
