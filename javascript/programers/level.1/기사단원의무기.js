// 내가 푼 풀이
function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let pp = [];
    for (let j = 1; j * j <= i; j++) {
      if (i % j == 0) {
        pp.push(j);
        pp.push(i / j);
      }
    }
    [...new Set(pp)].length > limit ? (answer += power) : (answer += [...new Set(pp)].length);
  }
  return answer;
}

// 다른 사람이 푼 풀이
function solution(number, limit, power) {
  var answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}
