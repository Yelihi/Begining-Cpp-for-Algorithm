// 내가 푼 풀이
function solution(ingredient) {
  let arr = [];
  let number = 0;
  ingredient.forEach((n) => {
    arr.push(n);
    if (arr.slice(-4).join("") === "1231") {
      arr.splice(-4);
      number += 1;
    }
  });
  return number;
}

// 다른 사람 풀이
function solution(ingredient) {
  let answer = 0;
  let stack = [];
  ingredient.forEach((ele) => {
    stack.push(ele);
    [stack, answer] = burgerStack(stack, answer);
  });
  return answer;
}

function burgerStack(arr, count) {
  if (arr.length < 4) return [arr, count];
  let [a, b, c, d] = arr.slice(-4);
  if (a == 1 && b == 2 && c == 3 && d == 1) {
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    count++;
    return [arr, count];
  }
  return [arr, count];
}
