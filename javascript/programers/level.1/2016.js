// 내가 푼 풀이
// 솔직히 별로기도 하고.. 근데 다른사람들 풀이하고 그닥 차이가 안나는것 같기도 하다.
function solution(a, b) {
  const month = {
    1: 0, // 31
    2: 31, // 29
    3: 60, // 31
    4: 91, // 30
    5: 121, // 31
    6: 152, // 30
    7: 182, // 31
    8: 213, // 31
    9: 244, // 30
    10: 274, // 31
    11: 305, // 30
    12: 335, // 31
  };
  const week = {
    0: "THU",
    1: "FRI",
    2: "SAT",
    3: "SUN",
    4: "MON",
    5: "TUE",
    6: "WED",
  };
  let answer = week[(month[a] + b) % 7];
  return answer;
}

// 다른 사람 풀이
function getDayName(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

// 다른 사람 풀이
function getDayName(a, b) {
  var dayList = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var daySum;
  if (a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
  return dayList[daySum % 7];
}
