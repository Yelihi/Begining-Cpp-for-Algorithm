// [93,30,55] 라고 할 때, 첫번째 기능은 93퍼 완료, [1,30,5] 라고 할 때, 하루에
// 1퍼씩 작업이 가능. 7일 이후 배포 가능
// 30 은 30이니, 3일 이후 배포 가능. 하지만 첫번째가 완료가 되지 않았기 때문에 7일차때 배포
// 3번째는 9일간 작업 후 배포 완료.
// 중요한건 몇개씩이냐가 중요한것이다.
// 작업갯수는 100개 이하 (따라서 n2 가능)
// 배포는 하루에 한번만 할 수 있다.

// 전략을 세워보자면, 하루(i) 가 지날때마다, 각 원소는 각각의 원소에 맞게 증가할 것이고,
// 만일 맨 앞의 프로그래스가 100을 초과하게 되면, 이때 또 다른 조건이 발동하여 순차적으로 이후
// 원소들이 다 100 이상이 되고 있는지를 파악해야할 것 같다. 그래서 그러한 원소들을 다 제거한다.
// 그렇다면 내 생각에는 배열을 다 뒤집고, 그 다음 반복하는게 좋겠다. pop이 속도상 훨씬 유리할테니 말이다.
// 빠져나간 갯수를 체크한다음에, 빈 배열에 천천히 push 한다. 이것이 답.

function solution(progresses, speeds) {
  // 배열을 뒤집자
  progresses.reverse();
  speeds.reverse();

  // 정답이 될 빈 배열 생성
  const answer = [];

  // 반복을 돌 것인데, 어떻게 할 거냐면, 마지막 인자가 100 이상이 될때까지 돌꺼니깐, while
  while (progresses.length !== 0) {
    let firstPG = progresses[progresses.length - 1];
    if (firstPG >= 100) {
      let count = 0;
      for (let i = progresses.length - 1; i >= 0; i--) {
        if (progresses[i] >= 100) {
          progresses.pop();
          speeds.pop();
          count++;
        } else {
          break;
        }
      }
      answer.push(count);
    } else {
      for (let i = 0; i < speeds.length; i++) {
        progresses[i] += speeds[i];
      }
    }
  }

  return answer;
}

// 다른 사람 풀이

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
