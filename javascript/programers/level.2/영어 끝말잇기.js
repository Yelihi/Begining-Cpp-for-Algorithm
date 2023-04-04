function solution(n, words) {
  var answer = [];
  const cache = [];
  const Sorder = Array(n)
    .fill()
    .map((_, idx) => idx + 1);
  Sorder.pop();
  Sorder.unshift(n);
  cache.push(words[0]);

  for (let i = 1; i < words.length; i++) {
    let before = words[i - 1];
    let after = words[i];
    if (before[before.length - 1] !== after[0] || cache.includes(after) || after.length === 1) {
      let order = Sorder[(i + 1) % n];
      let level = Math.floor((i + 1) % n) === 0 ? Math.floor((i + 1) / n) : Math.floor((i + 1) / n) + 1;
      answer = [order, level];
      break;
    }
    cache.push(after);
  }

  if (answer.length === 0) answer = [0, 0];

  return answer;
}

// 다른 사람 풀이

function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer = answer || (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0] ? idx : answer);
    return now[now.length - 1];
  }, "");

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
