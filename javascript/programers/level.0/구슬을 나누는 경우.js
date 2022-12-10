// BigInt 자료형을 활용해야 한다. 이부분에 테스트케이스로 추가되어 잘 몰랐다.
// 타입을 맞춰주어야 한다.
function factor(n) {
  if (n === 0) return 1;
  if (n === 1) return BigInt(n);

  return BigInt(n) * factor(n - 1);
}

function solution(balls, share) {
  if (balls === share) return 1;
  return factor(balls) / (factor(balls - share) * factor(share));
}

// 다른 방법이 있다
// 자바스크립트에서 나눗셈을 할 때 무한소수가 되어버리면 표현을 하지 못한다. 따라서 round 로 내림을 하는 방법!! 이렇듯 자바스크립트는 최대한 결과값을 정수로 표현해야 한다.

const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

function solution(balls, share) {
  return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share));
}
