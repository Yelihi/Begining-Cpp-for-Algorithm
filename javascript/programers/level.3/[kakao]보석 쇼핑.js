function solution(gems) {
  /**
   * 범위를 정하는 문제이다. 시작점부터 끝까지 정해야하며, 순서는 정해져있다.
   * 이런점에서 파악을 해볼떄, 두개의 포인트를 두고 최대지점과 최소지점의 범위를 조정해야한다.
   * 적어도 1개를 포함하는것이기에 set을 활용하자(집합)
   * 나는 실수를 했는데, 실수하지 말아야 할 점은 포함을 하기만 하면 된다는 것이다.
   */
  let answer = [0, gems.length];
  let start = 0;
  let end = 0;

  // 모든 종류가 담긴 사이즈
  const condition = new Set(gems).size;
  // 순회하면서 보석을 담을 map 구상하기
  let collect = new Map();
  // 첫번째 보석을 넣어주도록 하자
  collect.set(gems[0], 1); // 첫 보석 1개
  // 이제 순회를 돌자. 0부터 gems.length 까지
  while (start < gems.length && end < gems.length) {
    /**
     * map 의 특성상 set 을 해줄경우, 같은 key 라면 중복되지 않는다.
     * 그래서 곧바로 size 를 활용해도 관계없다.
     */
    if (collect.size === condition) {
      // 초반에 설정해둔 정답의 전체 범위보다 작다면
      if (end - start < answer[1] - answer[0]) {
        // 가능 범위를 좁혀주자.
        answer = [start + 1, end + 1];
      }

      // 이제 뒤에서부터 시작하여 하나씩 줄여나가자
      // 줄여 나가면서 collect.size 와 condition 을 비교한다.
      collect.set(gems[start], collect.get(gems[start]) - 1);

      // 만약 보석이 다 없어진다면 map 에서 지워준다.
      // 이렇게 되면 condition.size 와 불일치가 생기게 된다.
      if (collect.get(gems[start]) === 0) {
        collect.delete(gems[start]);
      }
      // 계속 start 를 증가시킨다
      start += 1;
      /**
       * 만약 위에서 delete 가 일어난다면
       * 이후 start 가 1 증가한다고 해도 관계가 없다
       * 왜냐하면 맨 위 if 에서 condition.size 와 일치하지 않기 때문에
       * answer 를 갱신하지 않는다.
       */
    } else {
      // end 포인트를 한칸 옆으로 이동시킨다
      end += 1;
      // collect 에 end 포인트가 가르키는 보석을 1 증가시켜준다.
      // 기존 gems[end] 가 있다면 그 기존값에 1을 더해주고, 아니라면 0 에 1을 더해준다.
      collect.set(gems[end], 1 + (collect.get(gems[end]) || 0));
    }
  }

  return answer;
}
