/**
 *
 * @param {Number} brown
 * @param {Number} yellow
 * @returns {Array}
 *
 * 처음에 어떤식으로 해결해야할지 좀 막막했는데, 카펫이 존재하고 생각해보면 yellow 라는 사각형을 감싸면
 * 자연스럽게 brown 의 수가 결정된다는 사실을 알게 되었다
 * yellow 가 a, b 의 길이를 가진다면, 조건상 a 가 b 보다 크다는 조건상 2a + 2b = brown + 2 가 된다
 * 그리고 a 가 b 보다 크다는 조건은 b 의 최소값을 결정시킨다. 즉 b 는 yellow 의 세로길이 1 을 감싸기 위해 최소 3이 되어야 한다
 * 최소값이 결정이 되니 이제 a 의 최대 범위가 결정난다. 그리고 b 의 최대값은 a 와 같아질때니깐 역시 결정이 난다
 * 이를 바탕으로 for 문으로 순회를 하면서 yellow 사각형의 성립 조건을 if 로 설정하면 된다.
 *
 */
function solution(brown, yellow) {
  let answer = [];
  let maxX = Math.floor(brown / 2) + 1; // 이게 최대
  let minX = Math.floor(brown / 4) + 1; // 이게 최소
  let maxY = Math.floor(brown / 4) + 1; // 이게 최대
  let minY = 3; // 이게 최소

  // 이 풀이의 아쉬운 점은 이중for 문으로 n^2 까지는 아니지만 별로 효율이 좋아보이진 않는다
  // 문제 자체는 잘 풀린다.
  for (let a = minX; a <= maxX; a++) {
    for (let b = minY; b <= maxY; b++) {
      if ((a - 2) * (b - 2) === yellow) {
        // 여기도 또 조건을 걸어준 이유는 break 를 걸어두었을 때 상위 for 문은 또 다시 a++ 해서 돌리기 떄문이다.
        if (a + a + (b - 2) + (b - 2) === brown) {
          answer = [a, b];
          break;
        }
      }
    }
  }
  return answer;
}

// 다른 사람 풀이
// 이중 for 문을 사용하지 않은 점에서 좋다
function solution(brown, red) {
  var answer = [];
  // 이 풀이는 전체 카펫수를 최소 세로길이 3으로 나눈 값으로 범위를 정했다. 좋다
  for (var i = 3; i <= (brown + red) / i; i++) {
    // i 는 1씩 증가하니 소수가 나올수 있기에 Math.floor 를 해주자
    var x = Math.floor((brown + red) / i);
    // 가로 x 와 세로 i를 곱한 값이 red 가 나온다면 break 해준다.
    if ((x - 2) * (i - 2) === red) {
      break;
    }
  }

  return [x, i];
}
