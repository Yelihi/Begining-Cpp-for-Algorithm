// 내가 푼 풀이
// 노가다에 60% 정도의 효율을 가지고 있다.
var romanToInt = function (s) {
  let str = s
    .replace(/CD/g, "400.")
    .replace(/CM/g, "900.")
    .replace(/XL/g, "40.")
    .replace(/XC/g, "90.")
    .replace(/IV/g, "4.")
    .replace(/IX/g, "9.")
    .replace(/M/g, "1000.")
    .replace(/D/g, "500.")
    .replace(/C/g, "100.")
    .replace(/L/g, "50.")
    .replace(/X/g, "10.")
    .replace(/V/g, "5.")
    .replace(/I/g, "1.");

  return str.split(".").reduce((a, c) => (a += Number(c)), 0);
};

// 다른 사람 풀이
// 로마 숫자는 순차적으로 커진다는점을 이용
// 그리고 왼쪽이 더 큰수라는 점을 활용한다
// 만일 왼쪽이 더 작은수라면 위에서 제시한 예외에 해당한다.
var romanToInt = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }

  return result;
};
