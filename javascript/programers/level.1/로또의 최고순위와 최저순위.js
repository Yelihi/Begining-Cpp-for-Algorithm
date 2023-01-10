// 내가 푼 풀이
function solution(lottos, win_nums) {
  let point = 0;
  let zero = 0;
  let ranking = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zero += 1;
      continue;
    }
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        point += 1;
      }
    }
  }
  let min = ranking[point] ? ranking[point] : 6;
  let max = ranking[point + zero] ? ranking[point + zero] : 6;
  return [max, min];
}

// 다른 사람 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
