//내 풀이
function solution(array, n) {
  var answer = 0;
  let sortArray = array.sort((a, b) => a - b);
  let arr = sortArray.map((v) => Math.abs(v - n));
  let minimum = arr[0];
  for (let i of arr) {
    minimum = Math.min(minimum, i);
  }
  let index = arr.indexOf(minimum);
  return sortArray[index];
}

//다른 사람 풀이
function solution(array, n) {
  return array.reduce((a, c) => (Math.abs(a - n) < Math.abs(c - n) ? a : Math.abs(a - n) === Math.abs(c - n) ? Math.min(a, c) : c));
}
