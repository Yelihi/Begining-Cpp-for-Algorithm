// 내가 푼 풀이
function solution(food) {
  let left = "";
  let right = "";
  for (let i = 1; i < food.length; i++) {
    if (Math.floor(food[i] / 2) > 0) {
      let number = Math.floor(food[i] / 2);
      left += (i + "").repeat(number);
    }
  }
  right = left.split("").reverse().join("");
  return left + "0" + right;
}

// 다른 사람 푼 풀이
function solution(food) {
  let player1 = [];
  let player2 = [];
  let repeat = 0;
  for (let i = 1; i <= food.length; i++) {
    if (food[i] > 1) {
      repeat = Math.floor(food[i] / 2);
      for (let j = 0; j < repeat; j++) player1.push(i);
      for (let k = 0; k < repeat; k++) player2.unshift(i);
    }
  }
  player1.push(0);
  player1 = player1.concat(player2);
  return player1.join("");
}
