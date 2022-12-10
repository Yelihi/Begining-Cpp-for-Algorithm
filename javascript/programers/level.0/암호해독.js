// 내가 푼 풀이

function solution(cipher, code) {
  var answer = [];
  let arr = cipher.split("");
  for (let i = code - 1; i < cipher.length; i = i + code) {
    answer.push(arr[i]);
  }
  return answer.join("");
}

// 다른 사람 풀이

function solution(cipher, code) {
  return cipher
    .split("")
    .filter((v, i) => (i + 1) % code === 0)
    .join("");
}
