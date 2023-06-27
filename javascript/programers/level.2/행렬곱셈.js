// 알맞게 곱셈에 맞는 arr1, arr2 가 주어진다.

function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const rows = [];
    // 절차
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      // 절차
      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }

      rows.push(sum);
    }
    answer.push(rows);
  }

  return answer;
}

// 고차함수로 구현한 사람

function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}
