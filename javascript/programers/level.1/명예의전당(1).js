// 내가 푼 풀이
function solution(k, score) {
  var answer = [];
  let limitScoreArr = [];
  for (let i = 0; i < score.length; i++) {
    if (limitScoreArr.length < k) {
      limitScoreArr.push(score[i]);
      limitScoreArr.sort((a, b) => b - a);
      answer.push(limitScoreArr[limitScoreArr.length - 1]);
      continue;
    }
    if (limitScoreArr[limitScoreArr.length - 1] < score[i]) {
      limitScoreArr.push(score[i]);
      limitScoreArr.sort((a, b) => b - a);
      limitScoreArr.pop();
      answer.push(limitScoreArr[limitScoreArr.length - 1]);
      continue;
    }
    answer.push(limitScoreArr[limitScoreArr.length - 1]);
  }
  return answer;
}

// 다른 사람 풀이
function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}
