// 내가 푼 풀이
var isValid = function (s) {
  // stack 활용하기
  let arr = [];
  if ([")", "]", "}"].includes(s[0])) return false;
  for (let i of s) {
    if (arr[arr.length - 1] == "(" && i == ")") {
      arr.pop();
      continue;
    }
    if (arr[arr.length - 1] == "[" && i == "]") {
      arr.pop();
      continue;
    }
    if (arr[arr.length - 1] == "{" && i == "}") {
      arr.pop();
      continue;
    }
    arr.push(i);
  }
  return arr.length == 0 ? true : false;
};

// 다른 사람 풀이
var isValid = function (s) {
  // Initialize stack to store the closing brackets expected...
  let stack = [];
  // Traverse each charater in input string...
  for (let idx = 0; idx < s.length; idx++) {
    // If open parentheses are present, push it to stack...
    if (s[idx] == "{") {
      stack.push("}");
    } else if (s[idx] == "[") {
      stack.push("]");
    } else if (s[idx] == "(") {
      stack.push(")");
    }
    // If a close bracket is found, check that it matches the last stored open bracket
    else if (stack.pop() !== s[idx]) {
      return false;
    }
  }
  return !stack.length;
};
