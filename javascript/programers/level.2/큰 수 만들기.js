function solution(number, k) {
  // 자리수는 지켜주어야 한다.
  // 작은 숫자부터 우선적으로 제거해주자
  // 숫자를 제거하면 어차피 자리수는 줄어든다. 그렇다면 맨 앞자리를 크게 하는것잉 핵심일 듯 하다.

  // number 를 split 해주어서 배열로 만든다
  // while 문을 만든다
  // 그 전에 변수 count = k 를 선언한다
  // 조건문은 count > 0 까지 무한루프를 돌린다
  // 시작 인덱스 start = 0 으로 해준다
  // while 안에서 number를 count 까지 slice 한다
  // 이후 여기서 최대값의 위치를 구한다
  // 만일 최대값이 모든 숫자가 같다면, 시작 인덱스를 시작 + count - 1 로 해주고 컨티뉴 한다.
  // 이 인덱스를 기점으로 원본 number 를 splice 해준다. 예를 들어 7이 2라면
  // splice를 (0,2) 로 해준다.
  // 동시에 splice 길이만큼 count 를 마이너스 해준다
  // 이후 시작 인덱스를 최대값 위치 인덱스로 변경한다

  const array = number.split("").map((v) => Number(v));

  let count = k;
  let startIndex = 0;
  while (count > 0) {
    const partArray = array.slice(startIndex, startIndex + count); // 4177
    if (partArray.length === 1) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
          array.splice(i, 1);
          count = 0;
          break;
        }
      }
    }
    const maxIndex = partArray.indexOf(Math.max(...partArray));
    const minIndex = partArray.indexOf(Math.min(...partArray));
    const set = new Set([...partArray]);
    if (maxIndex === 0) {
      if (set.size === 1) {
        startIndex += 1;
      }
      startIndex = startIndex + minIndex;
      continue;
    }
    array.splice(startIndex, maxIndex);
    count -= maxIndex;
    startIndex = 0;
  }
  return array.join("");
}

// 이 풀이는 시간초과가 발생한다.
// 이유는 과도한 splice 및 slice 에 더해 Math.max 를 사용하기 때문이다
// 그리디 문제는 조건 숫자 자체가 큰 경우가 많아서 이를 유의해야 한다.

// 솔루션

function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const num of number) {
    while (count < k && stack[stack.length - 1] < num) {
      stack.pop();
      count += 1;
    }
    stack.push(num);
  }

  // 만약 987654321 같은 경우라면 뒤에서부터 다 빼주어야 한다.
  while (count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join("");
}

// 배운점은 큰 수가 주어진다면 되도록 산술 속도가 빠른 메서드를 활용해야 한다.
// stack 의 pop 은 O(1) 이기에 아주 빠르다.
