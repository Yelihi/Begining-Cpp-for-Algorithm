// 내가 푼 풀이
function solution(s) {
  let length = s.length;
  if (length % 2 == 0) {
    return s[length / 2 - 1] + s[length / 2];
  }
  return s[(length - 1) / 2];
}

// 다른 사람 풀이
function solution(s) {
  return s.substring(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
