// discount 는 100000 이기에 n2 은 피해야한다
// 다만 100000 * 10 은 가능하기에 중첩반복을 사용했다... 더 좋은 해법이 있을거같긴한데..
// 객체로 변경하여 객체간 비교를 하여 공간복잡도에서 좀 별로긴하다.

function solution(want, number, discount) {
  let answer = 0;
  const wantingObject = {};
  for (let i = 0; i < want.length; i++) {
    wantingObject[want[i]] = number[i];
  }

  // 이제 계산을 합시다.
  for (let j = 0; j <= discount.length - 10; j++) {
    const discountObject = {};
    for (let k = j; k < j + 10; k++) {
      if (!discountObject[discount[k]]) {
        discountObject[discount[k]] = 1;
      } else {
        discountObject[discount[k]]++;
      }
    }
    const keys = Object.keys(wantingObject);
    const isTrue = keys.every(
      (key) => wantingObject[key] === discountObject[key]
    );
    if (isTrue) answer++;
  }

  return answer;
}

// 다른 사람 풀이
// 중첩반복을 쓴거는 같다.

function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    // slice 아이디어가 참 좋다. 배열을 잘 다루는방법.. 기억하자.
    const slice = discount.slice(i, i + 10);

    let flag = true;

    // 좋은점은 break 가 있기에 중간에 루프를 빠져나갈 수 있다.
    // 난 객체를 생성하기에 공간복잡도도 별로고, Every 메서드로 좀 더 복잡도가 늘어났을것이다.
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}
