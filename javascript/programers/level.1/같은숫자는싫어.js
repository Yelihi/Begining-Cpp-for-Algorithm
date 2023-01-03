// 내가 푼 풀이
function solution(arr) {
  let answer = [];
  for (let num of arr) {
    if (answer[answer.length - 1] === num) {
      continue;
    }
    answer.push(num);
  }
  return answer;
}

// 다른 사람 풀이
// 멋있게 풀었당.
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
