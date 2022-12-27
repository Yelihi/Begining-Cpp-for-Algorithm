//커스텀 정렬에 대해 배울 수 있다
//다른 사람 풀이도 잘 보자
//내 풀이
function solution(numlist, n) {
  numlist.sort((a, c) => {
    if (Math.abs(a - n) === Math.abs(c - n)) {
      return c - a;
    }
    if (Math.abs(a - n) < Math.abs(c - n)) {
      return -1;
    }
  });

  return numlist;
}

//다른 사람 풀이
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
