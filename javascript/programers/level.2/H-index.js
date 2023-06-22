function solution(arr) {
  arr.sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < arr[i]) {
      answer++;
    } else {
      break;
    }
  }

  return answer;
}
