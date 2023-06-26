// 실패한 코드

function solution(n, left, right) {
  // 2차원 배열 만들기
  const arr = Array.from(Array(n), () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i > j) {
        arr[i][j] = i + 1;
      } else {
        arr[i][j] = j + 1;
      }
    }
  }
  let concatArr = arr[0];
  for (let i = 1; i < n; i++) {
    concatArr = concatArr.concat(arr[i]);
  }
  const resultArr = concatArr.slice(left, right + 1);
  return resultArr;
}

// 정답

function solution(n, left, right) {
  if (n === 1)
    if (left >= 1) return [];
    else return [1];

  const answer = [];
  let rowCount = Math.floor(left / n) + 1;

  for (let i = left; i < right + 1; i++) {
    if ((i + 1) % n === 0) {
      answer.push(n);
      rowCount += 1;
      continue;
    }
    if (i % n < rowCount) answer.push(rowCount);
    else answer.push((i + 1) % n);
  }
  return answer;
}

// 정답

function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}

// 정답

function solution(n, left, right) {
  const ans = [];

  while (left++ <= right) {
    const a = left % n,
      b = Math.ceil(left / n);
    if (!a) ans.push(n);
    else if (a < b) ans.push(b);
    else if (a < n) ans.push(a);
  }

  return ans;
}
