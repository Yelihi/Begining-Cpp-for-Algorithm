// 내가 푼 풀이

function factor(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += i;
  }
  return answer;
}

function solution(num, total) {
  var answer = [];
  let total2 = total - factor(num);
  let divide = total2 / num;
  for (let i = 0; i < num; i++) {
    answer.push(divide + i);
  }
  return answer;
}

// 다른 사람 풀이
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}
