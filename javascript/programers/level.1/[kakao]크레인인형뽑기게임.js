// 내가 푼 풀이
function solution(board, moves) {
  let answer = 0;
  let put = [];
  let table = {};
  for (let i = 1; i <= board.length; i++) {
    table[i] = [];
  }
  let reboard = board.reverse();
  reboard.forEach((arr) =>
    arr.forEach((num, i) => {
      if (!num == 0) table[i + 1].push(num);
    })
  );
  moves.forEach((index) => {
    if (table[index].length == 0) return;
    if (put[put.length - 1] === table[index][table[index].length - 1]) {
      put.pop();
      table[index].pop();
      answer += 2;
      return;
    }
    put.push(table[index].pop());
  });
  return answer;
}

// 다른 사람 풀이
// reduce 와 map 에 관하여 연구가 필요할 듯 하다.

const transpose = (matrix) => matrix.reduce((result, row) => row.map((_, i) => [...(result[i] || []), row[i]]), []);

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) => row.reverse().filter((el) => el !== 0));
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};
