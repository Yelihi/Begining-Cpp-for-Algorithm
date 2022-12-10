// 내가 푼 풀이

function solution(array, commands) {
  // commands 를 반복을 돌려서 하나하나 비교
  let answer = [];
  commands.forEach((v) => {
    let partArr = array.slice(v[0] - 1, v[1]);
    partArr.sort((a, b) => a - b);
    answer.push(partArr[v[2] - 1]);
  });
  return answer;
}

// 다른 사람 풀이

function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array.filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1).sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
