// 문제
// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers 배열의 크기는 1 이상 1,000 이하입니다.
// numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
// hand는 "left" 또는 "right" 입니다.
// "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
// 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.

// 문제풀이

const keyPad = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
  "*": [3, 0],
  0: [3, 1],
  "#": [3, 2],
};

function move(num, leftUm, rightUm, hand) {
  let data = [];
  let leftMove = Math.abs(keyPad[leftUm][0] - keyPad[num][0]) + Math.abs(keyPad[leftUm][1] - keyPad[num][1]);
  let rightMove = Math.abs(keyPad[rightUm][0] - keyPad[num][0]) + Math.abs(keyPad[rightUm][1] - keyPad[num][1]);

  data = leftMove < rightMove ? ["L", num, rightUm] : leftMove > rightMove ? ["R", leftUm, num] : leftMove === rightMove && hand === "right" ? ["R", leftUm, num] : ["L", num, rightUm];

  return data;
}

function solution(numbers, hand) {
  let answer = "";
  let leftUm = "*";
  let rightUm = "#";
  const Hand = hand;

  numbers.forEach((num) => {
    if ([1, 4, 7].includes(num)) {
      answer += "L";
      leftUm = num;
    }
    if ([3, 6, 9].includes(num)) {
      answer += "R";
      rightUm = num;
    }
    if ([2, 5, 8, 0].includes(num)) {
      answer += move(num, leftUm, rightUm, Hand)[0];
      leftUm = move(num, leftUm, rightUm, Hand)[1];
      rightUm = move(num, leftUm, rightUm, Hand)[2];
    }
  });
  return answer;
}

// 다른 풀이 방법 (그리드)
function solution(numbers, hand) {
  let answer = "";
  // imagine a grid, and assign each number coordinates
  // by taking 5 being 0,0.
  // If needed, this can also be done programmatically.
  const grid = [
    [0, -2],
    [-1, 1],
    [0, 1],
    [1, 1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, -2],
    [1, -2],
  ];
  let L = 10; // 10th element of the grid are * and # of the keypad
  let R = 11; // 11th
  let L_steps, R_steps;
  hand = hand[0].toUpperCase();
  numbers.forEach((el) => {
    switch (grid[el][0]) {
      case -1:
        answer += "L";
        L = el;
        break;
      case 1:
        answer += "R";
        R = el;
        break;
      case 0:
        L_steps = Math.abs(grid[L][0] - grid[el][0]) + Math.abs(grid[L][1] - grid[el][1]);
        R_steps = Math.abs(grid[R][0] - grid[el][0]) + Math.abs(grid[R][1] - grid[el][1]);
        if (L_steps > R_steps) {
          answer += "R";
          R = el;
        } else if (L_steps < R_steps) {
          answer += "L";
          L = el;
        } else {
          answer += hand;
          eval(`${hand} = el`); //may affect performance?
        }
    }
  });
  return answer;
}
