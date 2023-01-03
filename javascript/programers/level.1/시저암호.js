// 내가 푼 풀이
function solution(s, n) {
  // 97 - 122 , 65 - 90
  // 문자열 1회 회독
  // 공백 제외 다른 케이스는 없으니 공백 아스키코드 일시 그대로 넣기 32
  // 나머지는 n 만큼 + 를 해주는데, 각각 90을 넘거나 122 를 넘으면
  // 예를 들어 89 에서 4를 더하면 93이 된다. 이 말은 Z A B C 인 셈이고 C 가 되야함
  // 그렇다면 C 는 67 임. 93 이 67 이 되려면 93-90+65-1 를 해주면 된다.
  // 정리하면 합본에 - 26 를 해주면 93-26 는 67 이 나온다.
  // 121 + 4 - 26 = 125-26 = 99 가 되서 역시나 같다.
  let password = s
    .split("")
    .map((v) => v.charCodeAt(0))
    .map((num) => {
      if (num == 32) return num;
      if ((num + n > 90 && num <= 90) || (num + n > 122 && num >= 97)) {
        return num + n - 26;
      }
      return num + n;
    })
    .map((change) => String.fromCharCode(change))
    .join("");
  return password;
}

// 다른 사람 풀이
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}

// 다른 사람 풀이
// 2진법으로 대문자의 코드들은 1000001~1011010, 소문자는 1100001~1111010라서 앞에 2자리로 빼고는 같습니다.
// 즉, 앞의 2자리로 대소문자를, 나머지 5자리로 알파벳을 구분합니다.
// 따라서 '(c & 96(1100000))'으로 앞의 2자리만 가져와 먼저 대소문자 구분부를 빼놓습니다.
// 뒤에 남은 5자리의 수(00001~11010)를 가져오기 위해 'c % 32(100000)'를 합니다.
// a가 1부터 시작하니 나머지 계산을 위해 '- 1'을 해서 초기점을 0으로(00000~11001) 잡아줍니다.
// 그럼 0~25의 숫자 중 하나가 나오고 여기서 n만큼 더해준 뒤 26으로 나머지 계산을 하고 다시 아까 빼 준 1을 다시 더한 것입니다.
function caesar(s, n) {
  var result = s.replace(/[a-z]/gi, (c) => [(c = c.charCodeAt(0)), String.fromCharCode((c & 96) + (((c % 32) + n - 1) % 26) + 1)][1]);
  return result;
}
