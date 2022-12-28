// 내가 푼 풀이지만 답 참조
// 정규 표현식에 대해서 좀 더 공부가 필요하다
// 추가로 문제를 풀 때 좀 노가다 같이 보여도 이걸 코드로 잘 작성하는 방법을 익히자

function solution(dartResult) {
  var answer = [];
  let temp = 0;
  let darts = dartResult.match(/\d.?\D/g);
  darts.forEach((string, i) => {
    if (string.includes("10")) {
      temp = 10;
    } else {
      temp = Number(string[0]);
    }
    if (string.includes("S")) {
      answer.push(temp);
    } else if (string.includes("D")) {
      answer.push(Math.pow(temp, 2));
    } else if (string.includes("T")) {
      answer.push(Math.pow(temp, 3));
    }
    if (string.includes("*")) {
      answer[i] *= 2;
      answer[i - 1] *= 2;
    }
    if (string.includes("#")) {
      answer[i] *= -1;
    }
  });
  return answer.reduce((a, c) => a + c);
}

// 다른 사람 풀이
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

//dartResult.match(/\d\d?.?\D/g)
