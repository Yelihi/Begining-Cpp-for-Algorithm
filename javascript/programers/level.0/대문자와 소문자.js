// 내가 푼 풀이 (아스키코드 연습하기)

function solution(my_string) {
  let change = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string.charCodeAt(i) < 91) {
      change += my_string[i].toLowerCase();
    } else {
      change += my_string[i].toUpperCase();
    }
  }
  return change;
}

// 좀더 간단한 풀이

function solution(my_string) {
  return my_string
    .split("")
    .map((v, index) => (my_string.charCodeAt(index) < 97 ? v.toLowerCase() : v.toUpperCase()))
    .join("");
}
