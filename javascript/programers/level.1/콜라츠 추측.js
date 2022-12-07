// 내가 푼 풀이

function solution(num) {
  let limit = 500;
  let count = 0;
  let result = 0;
  let answer = num;
  if (num === 1) {
    return 0;
  }
  while (limit > 0) {
    if (answer === 1) {
      result = count;
      break;
    }
    answer = answer % 2 === 0 ? answer / 2 : answer * 3 + 1;
    limit--;
    count++;
  }
  if (limit === 0 && answer !== 1) {
    return -1;
  }
  return result;
}

// 다른 사람들의 풀이1 (재귀함수)

function collatz(num, count = 0) {
  return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}

// 다른사람의 풀이 (while 인데 좀 더 깔끔)

function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
