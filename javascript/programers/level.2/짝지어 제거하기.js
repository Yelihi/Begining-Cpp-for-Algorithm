function solution(s) {
  let stack = [];
  for (const str of s) {
    if (stack.length > 0 && stack[stack.length - 1] === str) {
      stack.pop();
    } else {
      stack.push(str);
    }
  }
  return stack.length === 0 ? 1 : 0;
}
