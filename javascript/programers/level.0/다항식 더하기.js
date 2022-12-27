// 마지막 오답부분... 여튼 내가 푼 풀이
function solution(polynomial) {
  let x1 = 0;
  let cons = 0;
  let arr = polynomial.split(" ");
  arr.forEach((q) => {
    if (q === "x") {
      x1 += 1;
    }
    if (q !== "x" && q.includes("x")) {
      q.replace("x", "");
      x1 += parseInt(q);
    }
    if (!isNaN(q - 0)) {
      cons += parseInt(q);
    }
  });
  if (!x1) return `${cons}`;
  if (x1 === 1) {
    if (!cons) {
      return `x`;
    } else {
      return `x + ${cons}`;
    }
  } else {
    if (!cons) {
      return `${x1}x`;
    } else {
      return `${x1}x + ${cons}`;
    }
  }
}

//다른 사람 풀이
function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr.filter((n) => !isNaN(n)).reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
