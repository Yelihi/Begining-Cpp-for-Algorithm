//내가 푼 풀이
//좀 아쉽다
function solution(answers) {
  let answer = [];
  // 배열은 만개
  // 가장 높은 점수를 받은 사람이 여럿, 오름차순
  // 즉 O(n2) 가 되면 복잡도에서 실패할 수 있음.
  // 1억의 횟수가 3번이면 3억이니 힘들것같음
  let arr1 = Array(answers.length)
    .fill()
    .map((v, i) => ((i + 1) % 5 == 0 ? 5 : (i + 1) % 5));
  let arr2 = Array(answers.length)
    .fill()
    .map((v, i) => {
      if (i % 2 == 0) return 2;
      if (i % 8 == 5) return 4;
      if (i % 8 == 7) return 5;
      return i % 8;
    });
  let arr3 = Array(answers.length)
    .fill()
    .map((v, i) => {
      if (i % 10 == 0 || i % 10 == 1) return 3;
      if (i % 10 == 2 || i % 10 == 3) return 1;
      if (i % 10 == 4 || i % 10 == 5) return 2;
      if (i % 10 == 6 || i % 10 == 7) return 4;
      if (i % 10 == 8 || i % 10 == 9) return 5;
    });
  // answers 와 1대1 비교를 해주어야 함.
  let number1 = 0;
  let number2 = 0;
  let number3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == arr1[i]) number1++;
    if (answers[i] == arr2[i]) number2++;
    if (answers[i] == arr3[i]) number3++;
  }
  // 답이 하나인 경우와 여러개인 경우
  let set = [number1, number2, number3];
  let max = Math.max(...set);
  set.forEach((v, i) => {
    if (v == max) answer.push(i + 1);
  });
  return answer;
  console.log(answer);
}

// 다른 사람 풀이
// 배열의 패턴을 표시하고 나머지 계산으로 인덱스를 찾는다
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
