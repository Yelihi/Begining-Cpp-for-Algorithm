/**
cache size = 30
cities.length = 100,000 (즉, cities 의 n^2 은 안된다.)
cities[0].length = 20, 대소문자 구별없음
도시이름을 순차적 처리할 시 총 실행시간을 출력
캐시 알고리즘은 LRU 를 이용 (가장 최근 사용된)
cache hit 일 경우 1, cache miss 일 경우 5 이다.
예시 [5,5,5,5,5,1,1,1,1,1] = 30 인데 실행시간은 50이라고 한다. 그렇다는 말은
바로 앞에 중복된 값이 나온것이 아니라면 캐시로 취급하지 않겠다는 의미?
아니다 캐시 사이즈가 3이다. 즉 ['jeju','pangyo', 'seoul'] 이게 처음 들어가있고, 이제 다음 newYork 이 나온 경우 jeju 가 빠지게 된다. 그래서 다음 나오는 단어가 요 캐시에 있는지 여부로 결정한다.
*/

function solution(cacheSize, cities) {
  // 필요한건 캐시 배열
  // 그리고 반복을 돌면서, 캐시 배열내 존재하는지 확인, 캐시 크기는 작기때문에 find나 includes 를 써도 관계가 없을 듯 싶다.
  // 캐시 배열에 채우는 과정이 필요한데, 순서도 중요하기 때문에, 넣을때는 unshift 로 넣고, 캐시 사이즈가 꽉차있다면, pop 으로 제거하고 unshift 로 넣는다.
  // 4번째가 문제인데, 만약 4번쩨 글자가 나왔을 때, 먼저 배열을 확인해야한다. 그 다음 같이 pop 과 unshift 를 한다.
  // 반복은 cities 만 하기 때문에 시간복잡도는 문제없어 보인다.

  const cacheArr = [];

  const timeArr = cities.map((city) => {
    // 먼저 비교를 해야한다. 빈배열인지 확인하자
    const lowCity = city.toLowerCase();
    if (cacheSize == 0) return 5;
    let isCache = cacheArr.includes(lowCity);
    let indexOfCache = cacheArr.indexOf(lowCity);

    if (cacheArr.length < cacheSize) {
      cacheArr.unshift(lowCity);
    } else {
      if (indexOfCache === -1) {
        cacheArr.pop();
      } else {
        cacheArr.splice(indexOfCache, 1);
      }
      cacheArr.unshift(lowCity);
    }

    return isCache ? 1 : 5;
  });

  const result = timeArr.reduce((a, b) => a + b);
  return result;
}
