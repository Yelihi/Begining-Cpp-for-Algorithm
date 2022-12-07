// 내 풀이(예외사항에서 좀 애먹음)

function solution(my_string) {
  var arr = [];
  let word = "";
  const splitString = my_string.split("");
  splitString.forEach((num) => {
    if (num.match(/[0-9]/)) {
      word += num;
    } else {
      if (word) {
        arr.push(word);
        word = "";
      }
    }
  });
  // 만일 마지막문자가 숫자라 arr 에 들어가지 않은 경우를 처리.
  if (word) arr.push(word);
  return arr.length > 0 ? arr.map((i) => Number(i)).reduce((a, b) => a + b) : 0;
}

// 다른 사람의 풀이

function solution(my_string) {
  return my_string
    .toLowerCase()
    .replace(/[a-z]/g, " ")
    .split(" ")
    .map((v) => v * 1)
    .reduce((a, b) => a + b);
}
