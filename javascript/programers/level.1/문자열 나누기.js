// 문제를 잘못 이해했다.
// 그래서 이상한 풀이가 나왔지만 이 풀이는 나중에 다른 문제를 풀때 응용이 될 거 같다.
function solution(s) {
  let code = Array(26)
    .fill()
    .map((v, i) => String.fromCharCode(i + 97));
  let number = 0;
  s.split("").forEach((a, i) => {
    if (typeof code[a.charCodeAt(0) - 97] == "string") {
      code[a.charCodeAt(0) - 97] = 1;
    } else {
      code[a.charCodeAt(0) - 97] += 1;
    }
    if (code.length !== [...new Set(code)].length) {
      number += 1;
      code = Array(26)
        .fill()
        .map((v, i) => String.fromCharCode(i + 97));
    }
  });
  if (
    code.join("") !==
    Array(26)
      .fill()
      .map((v, i) => String.fromCharCode(i + 97))
      .join("")
  )
    number += 1;
  return number;
}

// 다시 푼 풀이
// 훨씬 문제가 쉬운것이었다. 위에 내가 해석한 부분이 더 어려움
function solution(s) {
  let firstCode = "";

  let cnt1 = 0;
  let cnt2 = 0;
  let number = 0;

  for (let code of s) {
    if (!firstCode) {
      firstCode = code;
    }

    if (code == firstCode) {
      cnt1++;
    } else {
      cnt2++;
    }

    if (cnt1 === cnt2) {
      number++;
      firstCode = "";
      cnt1 = 0;
      cnt2 = 0;
    }
  }
  if (cnt1 !== 0 || cnt2 !== 0) number++;
  return number;
}
