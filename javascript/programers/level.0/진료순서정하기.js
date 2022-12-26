// 내풀이
function solution(emergency) {
  let sortEmergency = [...emergency].sort((a, b) => b - a);
  let answerArr = emergency.map((v) => sortEmergency.indexOf(v) + 1);
  return answerArr;
}

//다른사람 풀이
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
