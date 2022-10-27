#include <bits/stdc++.h>
using namespace std;
int n, m;
int a[104][104], visited[104][104];

int dx[] = { -1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

int bfs(int x, int y){
  visited[x][y] = 1;
  queue<pair<int, int>> q;
  q.push({x, y});
  while(q.size()){
    int x = q.front().first;
    int y = q.front().second;
    q.pop();
    for(int i = 0; i < 4; i++){
      int nx = x + dx[i];
      int ny = y + dy[i];
      if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if(a[nx][ny] == 0) continue;
      if(a[nx][ny] == 1 && !visited[nx][ny]){
        visited[nx][ny] = visited[x][y] + 1;
        q.push({nx, ny});
      }
    }
  }
  return visited[n-1][m-1];
}

int main(){
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      scanf("%1d", &a[i][j]);
    }
  }
  cout << bfs(0, 0) << "\n";
  return 0;
}