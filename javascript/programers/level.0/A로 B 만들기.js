// 내가 푼 풀이 (map 을 연습해보았다.)

function solution(before, after) {
  let map1 = new Map();
  // 시간복잡도 n
  before.split("").forEach((v) => {
    map1.get(v) ? map1.set(v, map1.get(v) + 1) : map1.set(v, 1);
  });
  // 시간 복잡도 n
  after.split("").forEach((v) => {
    if (map1.has(v)) {
      map1.set(v, map1.get(v) - 1);
    }
    if (map1.get(v) === 0) {
      map1.delete(v);
    }
  });
  return map1.size ? 0 : 1;
  // 총 2n
}

// 다른풀이 . 이렇게 하지 않은 이유는 sort 가 시간복잡도를 nlonn 을 가지고 있어서 다른 방법을 구사해 보았다.
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0;
}
