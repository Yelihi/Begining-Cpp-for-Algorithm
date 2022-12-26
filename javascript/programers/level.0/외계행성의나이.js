// 내가 푼 풀이
function solution(age) {
  var answer = "";
  let table = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };
  return (age + "")
    .split("")
    .map((v) => table[v])
    .join("");
}

// 다른사람 풀이
function solution(age) {
  let char = "abcdefghij";
  return Array.from(age.toString())
    .map((t) => char[+t])
    .join("");
}
