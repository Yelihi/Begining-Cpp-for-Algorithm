function solution(s) {
  let count = 0;
  let copyS = s;

  for (let i = 0; i < s.length; i++) {
    let stack = [];
    const array = copyS.split("");
    array.unshift(copyS[copyS.length - 1]);
    array.pop();
    copyS = array.join("");
    for (let j = 0; j < array.length; j++) {
      switch (true) {
        case stack.length === 0:
          stack.push(array[j]);
          break;
        case stack[stack.length - 1] === "{" && array[j] === "}":
          stack.pop();
          break;
        case stack[stack.length - 1] === "(" && array[j] === ")":
          stack.pop();
          break;
        case stack[stack.length - 1] === "[" && array[j] === "]":
          stack.pop();
          break;
        default:
          stack.push(array[j]);
          break;
      }
    }
    if (stack.length === 0) count++;
  }

  return count;
}

// 다른사람 풀이

function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const arr = [];
    const temp = i === 0 ? s : s.slice(i) + s.slice(0, i);
    for (let j = 0; j < temp.length; j++) {
      if (arr[arr.length - 1] === "(" && temp[j] === ")") arr.pop();
      else if (arr[arr.length - 1] === "[" && temp[j] === "]") arr.pop();
      else if (arr[arr.length - 1] === "{" && temp[j] === "}") arr.pop();
      else arr.push(temp[j]);
    }
    if (arr.length === 0) answer++;
  }
  return answer;
}
