// 내가 푼 풀이
function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    if (a[n] === b[n]) {
      if (a < b) {
        return -1;
      }
      return 1;
    }
    if (a[n] < b[n]) {
      return -1;
    }
    return 1;
  });
  return answer;
}

// 다른 사람 풀이
// localeCompare 처음 들어봄
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) => (s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])));
}

// 다른 방식도 있다.
function solution(strings, n) {
  return strings.sort().sort((a, b) => (a[n] >= b[n] ? 1 : -1));
}
