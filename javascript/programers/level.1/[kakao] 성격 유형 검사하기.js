// 내가 푼 풀이
function solution(survey, choices) {
  let answer = "";
  let score = [".", 3, 2, 1, 0, 1, 2, 3];
  let table = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  survey.forEach((word, i) => {
    if (choices[i] > 4) {
      table[word[1]] += score[choices[i]];
      return;
    }
    table[word[0]] += score[choices[i]];
  });
  table["R"] >= table["T"] ? (answer += "R") : (answer += "T");
  table["C"] >= table["F"] ? (answer += "C") : (answer += "F");
  table["J"] >= table["M"] ? (answer += "J") : (answer += "M");
  table["A"] >= table["N"] ? (answer += "A") : (answer += "N");
  return answer;
}

// 다른 사람 풀이
// 구조 분해라는 부분을 다시 이해해봐야겠다.
function solution(survey, choices) {
  const data = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    const score = choices[i] - 4;
    let type = survey[i].split("")[score < 0 ? 0 : 1];
    data[type] += Math.abs(score);
  }

  const { R, T, C, F, J, M, A, N } = data;
  return `${R >= T ? "R" : "T"}${C >= F ? "C" : "F"}${J >= M ? "J" : "M"}${A >= N ? "A" : "N"}`;
}

// 또 다른 풀이
function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
