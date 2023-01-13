// 내가 푼 풀이
var longestCommonPrefix = function (strs) {
  let firstWord = strs[0];
  if (firstWord == "") return "";
  let prefix = "";

  for (let i = 0; i < firstWord.length; i++) {
    if (strs.every((v) => v[i] == firstWord[i])) {
      prefix += firstWord[i];
      check = true;
      continue;
    }
    break;
  }
  return prefix;
};

// 다른 사람 풀이
var longestCommonPrefix = function (strs) {
  "use strict";
  if (strs === undefined || strs.length === 0) {
    return "";
  }

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};
