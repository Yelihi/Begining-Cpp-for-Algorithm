// 그렇게 좋지는 않은 풀이인듯 싶다. 간신히 통과
// 요는 shift 사용을 최소화 하는 방법

function solution(people, limit) {
  let count = 0;

  const sortBig = people.sort((a, b) => a - b);

  while (sortBig.length > 0) {
    if (sortBig[0] + sortBig[sortBig.length - 1] > limit) {
      sortBig.pop();
      count += 1;
    } else {
      sortBig.pop();
      sortBig.shift();
      count += 1;
    }
  }

  return count;
}
