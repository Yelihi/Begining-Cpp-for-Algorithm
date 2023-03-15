/**
 * 아직도 dfs, bfs 개념을 잘 모르겠다...
 * 우선 maps 가 2차원 배열로 주어지고, 최단 거리를 찾는 문제이다.
 */

function solution(maps) {
  // 우선 큐를 생성한다
  let queue = [];
  // 방문기록을 할 배열을 새로 생성한다.
  let visited = Array.from(Array(maps.length), () => []);

  // 여기선 간선의 가중치가 없다. 즉 노드들은 각각 1의 간선으로 연결되어있다고 판단할 수 있다
  // 이러한 점은 굳이 그래프로 maps 를 표현하지 않아도 좌표로 표현이 가능하다.
  // 각각 오른쪽, 왼쪽, 위, 아래를 나타낸다.
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];

  // 여기서 주의할 점은 n * m 의 크기이기 떄문에 제한크기를 주의하자
  // visited 하지 않은 부분을 0으로 한다.
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      visited[i][j] = 0;
    }
  }

  // 최단거리이기에 BFS 를 통해 전체 주의를 1씩 증가시키면서 누적합을 구하는것이 유리하다
  // 따라서 BFS
  function BFS(a, b) {
    // 우선 queue 에 좌표를 넣는다.
    queue.push([a, b]);
    // queue 가 존재할때 까지
    while (queue.length) {
      // 맨 앞 노드를 꺼낸다
      let start = queue.shift();
      // 앞 노드의 x, y 좌표를 저장한다.
      let x = start[0];
      let y = start[1];

      // 노드의 상하좌우 부분을 탐색할 것이다.
      for (let i = 0; i < 4; i++) {
        // 움직이는 좌표를 설정하고
        let nx = x + dx[i];
        let ny = y + dy[i];
        // 배열 외부로 벗어나서 탐색하지 않도록 설정하자.
        // 0보다 작거나 5*5 행렬이라면 5와 같거나 넘어서는 안된다. (배열 인덱스는 -1 이니깐)
        if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length) continue;
        // 만일 갈수없는 구역이라면 통과하도록 하자
        if (maps[nx][ny] == 0) continue;
        // 방문을 안했고, 건널 수 있는 구역이라면
        if (visited[nx][ny] == 0 && maps[nx][ny] == 1) {
          visited[nx][ny] = 1;
          // 이전 값에서 1만큼 더 증가시켜준다.
          maps[nx][ny] = maps[x][y] + 1;
          // 그리고 다시 이동한 노드를 넣어준다.
          queue.push([nx, ny]);
        }
      }
    }
    // 마지막 도착지점의 좌표를 return 해준다.
    return maps[maps.length - 1][maps[0].length - 1];
  }
  let answer = BFS(0, 0);

  // 만일 마지막 도착지점을 방문할 수 없다면 마지막 좌표는 그대로 1일 테니깐 1이라면 -1을 리턴한다.
  return answer == 1 ? -1 : answer;
}
