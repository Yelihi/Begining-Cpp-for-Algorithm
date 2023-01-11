// 내가 푼 풀이
function solution(s) {
  let adress = Array(26).fill(0);
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (!adress[s[i].charCodeAt(0) - 97]) {
      answer.push(-1);
      adress[s[i].charCodeAt(0) - 97] = i + 1;
    } else {
      answer.push(i + 1 - adress[s[i].charCodeAt(0) - 97]);
      adress[s[i].charCodeAt(0) - 97] = i + 1;
    }
  }

  return answer;
}

// 다른 사람 풀이
// 훨씬 간단히 푼다....
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}

// 또 다른 풀이
const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
