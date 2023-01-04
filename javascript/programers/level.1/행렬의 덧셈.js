//내가 푼 풀이
//깔끔한 풀이는 아닌것 같다.
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
  }
  return answer;
}

//다른 사람 풀이
function solution(A, B) {
  return A.map((a, i) => A.map((b, j) => b + B[i][j]));
}
