// 내 풀이.. 노가다..

function solution(babbling) {
  let mouth = ["aya", "ye", "woo", "ma"];
  var answer = 0;
  babbling.forEach((v) => {
    let a = v.replace(mouth[0], "1");
    let b = a.replace(mouth[1], "1");
    let c = b.replace(mouth[2], "1");
    let word = c.replace(mouth[3], "1");
    if (!isNaN(word - 0)) {
      answer++;
    }
  });
  return answer;
}

// 다른 사람 풀이
function solution(babbling) {
  var answer = 0;
  for (var i = 0; i < babbling.length; i++) {
    if (babbling[i].replace("ye", " ").replace("aya", " ").replace("woo", " ").replace("ma", " ").trim() == "") {
      answer = answer + 1;
    }
  }
  return answer;
}
