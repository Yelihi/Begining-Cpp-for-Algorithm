const Dictionary = [
  0,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function solution(msg) {
  let answer = [];
  let copyMsg = msg;

  while (copyMsg.length > 0) {
    for (let i = Dictionary.length - 1; i >= 0; i--) {
      if (copyMsg.startsWith(Dictionary[i])) {
        const indexLength = Dictionary[i].length; // 길이를 젠다
        const addDic = copyMsg.slice(0, indexLength + 1);
        if (!Dictionary.includes(addDic)) Dictionary.push(addDic);
        answer.push(i);
        copyMsg = copyMsg.slice(indexLength);
        break;
      }
    }
  }

  return answer;
}
