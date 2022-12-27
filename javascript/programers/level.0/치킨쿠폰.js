//반례

반례: 1999;
기대값: 222;
출력값: 221;

function solution(chicken) {
  var answer = 0; // 199 + 19 + 1
  let restCoupon = 0; // 9 + 9 + 9 + 1
  let getChicken = chicken; //199 -> 19 -> 1
  while (true) {
    if (getChicken < 10) {
      restCoupon += getChicken;
      let change = Math.floor(restCoupon / 10);
      answer += change + Math.floor((change + (restCoupon % 10)) / 10);
      break;
    }
    restCoupon += getChicken % 10;
    getChicken = Math.floor(getChicken / 10);
    answer += getChicken;
  }
  return answer;
}

//다른 사람 풀이
//더 깔끔하다
function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    answer = answer + parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  return answer;
}

//다른사람풀이
function solution(chicken) {
  let coupon = chicken;
  let ans = 0;

  while (coupon > 9) {
    let add = ~~(coupon / 10);
    ans += add;
    coupon -= add * 9;
  }

  return ans;
}
