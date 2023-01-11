// 내가 푼 풀이
// 확실히 난 달력 문제에 많이 약한편이다. 뭔가 방법이 있으려나...
function solution(today, terms, privacies) {
  // 기준점을 2000년 1월 1일로 잡으면 된다.
  // 이때가 1일이라 하면, 2월 1일은 1 + 28
  // 11번의 28일을 더하면 2001년 1월 1일이다. 따라서 1년은 28 * 11
  // 이런식의 계산으로 2021.5.2 를 계산해보면 21년까지 28 * 11 * 21 + 28 * 4 + 2-1 로 표현할 수 있다.
  let answer = [];
  let changeToday = today.split(".").map((v) => Number(v));
  let TodaySum = (changeToday[0] - 2000) * 12 * 28 + (changeToday[1] - 1) * 28 + (changeToday[2] - 1);
  let table = {};
  terms.forEach((v) => {
    let grade = v.split(" ")[0];
    table[grade] = v.split(" ")[1];
  });
  privacies.forEach((day, i) => {
    let priDay = day
      .split(" ")[0]
      .split(".")
      .map((v) => Number(v));
    let priStart = (priDay[0] - 2000) * 12 * 28 + (priDay[1] - 1) * 28 + (priDay[2] - 1);
    let vaild = priStart + table[day.split(" ")[1]] * 28;
    if (vaild <= TodaySum) {
      answer.push(i + 1);
    }
  });
  return answer;
}

// 다른 사람 풀이
// reduce 를 활용한 방법이다.
function solution(today, terms, privacies) {
  const map = new Map();
  for (let i = 0; i < terms.length; i++) {
    const [type, term] = terms[i].split(" ");
    map.set(type, term * 28);
  }

  return privacies.reduce((acc, curr, i) => {
    const [date, type] = curr.split(" ");
    const [cy, cm, cd] = date.split(".");
    const [ty, tm, td] = today.split(".");

    const currentDays = +cy * 12 * 28 + +cm * 28 + +cd;
    const todayDays = +ty * 12 * 28 + +tm * 28 + +td;

    if (todayDays - currentDays >= map.get(type)) acc.push(i + 1);
    return acc;
  }, []);
}
