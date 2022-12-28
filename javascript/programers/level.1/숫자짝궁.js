//내가 푼 풀이
function solution(X, Y) {
  var answer = [];
  // O제곱이 나오면 안됨
  let Xtable = {};
  X.split("").forEach((v) => {
    if (!Xtable[v]) {
      Xtable[v] = 1;
      return;
    }
    Xtable[v]++;
  });
  Y.split("").forEach((v) => {
    if (!Xtable[v]) {
      return;
    }
    answer.push(v - 0);
    Xtable[v]--;
  });
  let ans = answer.sort((a, c) => c - a).join("") + "";
  if (!ans) {
    return "-1";
  }
  if (ans - 0 == 0) {
    return "0";
  }
  return ans;
}

//다른 사람이 푼 풀이
function solution(X, Y) {
  const commonNumbers = [...new Set(X.split(""))]
    .filter((number) => {
      return Y.includes(number);
    })
    .sort((a, b) => b - a);

  if (!commonNumbers.length) return "-1";

  if (!Number(commonNumbers[0])) return "0";

  return commonNumbers
    .map((number) => {
      const Xcount = X.split("").reduce((count, Xnumber) => {
        if (Xnumber === number) return (count += 1);

        return count;
      }, 0);

      const Ycount = Y.split("").reduce((count, Ynumber) => {
        if (Ynumber === number) return (count += 1);

        return count;
      }, 0);

      return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount);
    })
    .join("");
}
