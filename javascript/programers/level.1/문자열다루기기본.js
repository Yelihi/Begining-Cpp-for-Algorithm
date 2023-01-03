// 나의 풀이
// 참고해야할 것이 '3e10'-0 은 NaN 이 아니다. 지수로서 표현됨. 이것이 테스트케이스에서 걸렸음.
function solution(s) {
  if (!(s.length === 4 || s.length === 6)) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i] - 0)) {
      return false;
    }
  }
  return true;
}

// 다른 사람 풀이
// 항상 문자열에는 정규식을 생각하자.
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
