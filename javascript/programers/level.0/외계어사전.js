//내가 푼 풀이
// 오류라고 한다
// 왜냐면 spell 의 단어를 한번씩만 사용해야한다는 것에 위반한다고 한다.
function solution(spell, dic) {
  for (let word of dic) {
    if (spell.every((i) => word.includes(i))) {
      return 1;
    }
  }
  return 2;
}

// 다른 제대로된 풀이
function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
