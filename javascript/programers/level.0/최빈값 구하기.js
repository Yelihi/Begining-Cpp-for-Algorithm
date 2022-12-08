// 내가 풀이한 답 (for in 과 for of 의 차이점을 파악하자)

function solution(array) {
  let number = {};
  let answer = [];
  array.forEach((v) => {
    number[v] ? number[v]++ : (number[v] = 1);
  });
  // 숫자가 나오게 됨
  let answerIndex = Math.max(...Object.values(number));
  for (let v of Object.keys(number)) {
    if (number[v] === answerIndex) {
      answer.push(v - 0);
    }
  }
  if (answer.length > 1) return -1;
  return answer[0];
}

//다른 사람 풀이
