// 내가 푼 풀이
function solution(numbers, k) {
  var answer = 0;
  // 2 는 5
  // 3 은 7
  // 4 는 9
  // 1 은 3
  // n 은 2n+1
  // 최소 필요 배열 길이 2n+1
  let arr = [...numbers];
  while (arr.length <= 2 * k + 1) {
    arr = arr.concat(numbers);
  }
  return arr[2 * k - 2];
}

// 다른 사람 풀이
function solution(numbers, k) {
  const [idx, len] = [k * 2 - 1, numbers.length];
  const findIdx = idx >= len ? idx % len : idx;
  return findIdx;
}

//다른 사람 풀이
function solution(numbers, k) {
  return numbers[(2 * (k - 1)) % numbers.length];
}
