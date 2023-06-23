// 진짜 허접하다...

function solution(elements) {
  let answer = [];
  answer.push(elements.reduce((a, b) => a + b));
  for (let i = 0; i < elements.length; i++) {
    const newArray = [...elements];
    const add = elements.slice(0, i);
    newArray.push(...add);
    for (let j = 0; j < elements.length; j++) {
      if (i === 0) continue;
      const segment = newArray.slice(j, j + i).reduce((a, b) => a + b);
      const subSum = [];
      subSum.push(segment);
      const set = new Set(subSum);
      answer.push(...set);
    }
  }
  const set = new Set(answer);
  return [...set].length;
}

// 다른 사람 풀이

function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}
