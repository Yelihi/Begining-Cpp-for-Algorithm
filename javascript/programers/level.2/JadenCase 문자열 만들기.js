function solution(s) {
  /**
   * 우선 문자열을 모두 소문자로 변경한 다음, 공백기준으로 나눠준다
   * 이후 각 단어별로 맨 앞글자가 a:97 부터 z:122 까지인지 확인을 해준다
   * 만약 포함된다면 맨 앞글자를 대문자로 바꿔준다면 교체해준다
   * 그리고 이 단어를 return
   * 아니라면 그냥 단어를 return 한다.
   * 이렇게 JadenCaseArray 가 완성이 되었다면 이제 공백으로 join 해주어서
   * 만들고자 하는 문자열을 생성한다.
   * 시간복잡도는 문자 배열의 길이만큼의 반복문이 소요된다. 또한 replace 과정에서도 word 만큼의 시간이 소요될 것이다.
   */
  let lowSArray = s.toLowerCase().split(" ");
  let JadenCaseArray = lowSArray.map((word) => {
    if (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) {
      let Upper = word[0].toUpperCase();
      let UpperWord = word.replace(word[0], Upper);
      return UpperWord;
    } else {
      return word;
    }
  });
  return JadenCaseArray.join(" ");
}

// 다른사람 풀이
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
