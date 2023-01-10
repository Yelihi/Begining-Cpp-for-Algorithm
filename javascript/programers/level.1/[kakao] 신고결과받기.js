// 내가 푼 풀이
function solution(id_list, report, k) {
  let answer = [];
  let reportTable = {};
  let bad = {};
  id_list.forEach((id) => {
    reportTable[id] = [];
    bad[id] = 0;
  });
  // 이제 report 를 참고하여 테이블에 저장하면서 동시에 점수도 저장하자.
  report.forEach((num) => {
    let arr = num.split(" ");
    if (!reportTable[arr[0]].includes(arr[1])) {
      reportTable[arr[0]].push(arr[1]);
      bad[arr[1]] += 1;
    }
  });
  // 그 다음 k와 bad value 를 비교하여 어떤 key 값이 신고받았는지 결정하기
  let badId = Object.keys(bad).filter((id) => bad[id] >= k);
  // 마지막으로 badId 에 해당하는 유저에 대해 answer 에 숫자 담아주기
  Object.keys(reportTable).forEach((id) => {
    let number = 0;
    reportTable[id].forEach((v) => {
      if (badId.includes(v)) {
        number += 1;
      }
    });
    answer.push(number);
  });
  return answer;
}

// 다른 사람 풀이
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
