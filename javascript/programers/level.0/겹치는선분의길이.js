//내가 푼 풀이
function solution(lines) {
  let table = {};
  lines.forEach((num) => {
    for (let i = num[0]; i < num[1]; i++) {
      if (!table[i]) {
        table[i] = 1;
        continue;
      }
      table[i]++;
    }
  });
  return Object.values(table).filter((i) => i !== 1).length;
}
