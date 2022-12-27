//내가 푼 풀이
function solution(quiz) {
  let answer = quiz.map((string) => {
    let arr = string
      .split(" ")
      .filter((v) => !isNaN(v - 0))
      .map((v) => v - 0);
    return string.includes("+") ? (arr[0] + arr[1] === arr[2] ? "O" : "X") : arr[0] - arr[1] === arr[2] ? "O" : "X";
  });
  return answer;
}

// 다른 사람 풀이
function solution(quiz) {
  var answer = [];
  return quiz.map((t) => {
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return +a + +b * sign === +result ? "O" : "X";
  });
}
