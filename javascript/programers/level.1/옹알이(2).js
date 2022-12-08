// 내가 푼 풀이
function solution(babbling) {
  let answer = 0;
  let mouth = ["aya", "ye", "woo", "ma"];
  babbling.forEach((v) => {
    let word = v.replaceAll(mouth[0], "1").replaceAll(mouth[1], "2").replaceAll(mouth[2], "3").replaceAll(mouth[3], "4");
    if (isNaN(word - 0)) return;
    let numberArr = word.split("");
    let check = false;
    for (let i = 1; i < numberArr.length; i++) {
      if (numberArr[i - 1] == numberArr[i]) {
        check = true;
        return;
      }
    }
    if (check) return;
    answer += 1;
  });
  return answer;
}

// 다른 사람이 푼 풀이
function solution(babbling) {
  const r1 = /(aya|ye|woo|ma)\1/;
  const r2 = /^(aya|ye|woo|ma)+$/;
  let answer = 0;
  for (const b of babbling) {
    const m = r1.exec(b);
    if (m) continue;

    const m2 = r2.exec(b);
    if (!m2) continue;

    answer++;
  }

  return answer;
}
