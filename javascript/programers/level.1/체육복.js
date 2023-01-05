// 솔직히 혼자서 못풀었다.
// 예외처리나 논리에서 내 이해력이 떨어졌다.
// 탐욕법으로 어떻게 처리하는지 궁금하다
function solution(n, lost, reserve) {
  let sortLost = lost.sort((a, b) => a - b);
  let sortReserve = reserve.sort((a, b) => a - b);

  let x = 0;
  for (let i = 0; i < sortLost.length; i++) {
    for (let j = 0; j < sortReserve.length; j++) {
      if (sortLost[i] == sortReserve[j]) {
        sortLost[i] = "x";
        sortReserve[j] = "x";
        x++;
      }
    }
  }

  let student = 0;
  for (let i = 0; i < sortLost.length; i++) {
    for (let j = 0; j < sortReserve.length; j++) {
      if (sortLost[i] - 1 == sortReserve[j] || sortLost[i] + 1 == sortReserve[j]) {
        student++;
        sortReserve[j] = "x";
        break;
      }
    }
  }

  return n - (lost.length - student) + x;
}

// 다른 사람 풀이
// 옷이 2벌이라는 점을 활용해서 총 옷이 1벌 이상인 사람만 추리고자 함
function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}

// filter 를 이용한 방법
// 다시 연구를 해보자
function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  const newLost = lost.filter((l) => !reserve.includes(l));
  let newReserve = reserve.filter((r) => !lost.includes(r));
  return (
    n -
    newLost.filter((a) => {
      const b = newReserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      newReserve = newReserve.filter((r) => r !== b);
    }).length
  );
}
