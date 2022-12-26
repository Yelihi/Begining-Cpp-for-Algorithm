// 내가 푼 풀이
function solution(numbers) {
  let test1 = [...numbers].sort((a, b) => a - b);
  let test2 = [...numbers].sort((a, b) => b - a);
  let maximum = Math.max(test1[0] * test1[1], test2[0] * test2[1]);
  return maximum;
}

// 다른 사람 풀이
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
}
