// 내가 푼 풀이
function solution(numbers, direction) {
  let copy = [...numbers];
  if (direction === "right") {
    let last = copy.pop();
    copy.unshift(last);
  } else {
    let first = copy.shift();
    copy.push(first);
  }
  return copy;
}

// 왠만하면 shift 와 unshift 는 사용하기 싫었지만, 왜냐하면 시간복잡도가 O(n) 이기 때문
// 하지만 회전시키는 부분에서 어쩔수없이 n 번의 순회가 돌아야 한다고 아직까지는 생각이 든다.
