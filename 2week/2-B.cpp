#include <bits/stdc++.h>
using namespace std;
int t, n, m, k, a[54][54], visited[54][54], npx, npy;

int dx[] = { -1, 1, 0, 0};
int dy[] = { 0, 0, -1, 1};

void dfs(int x, int y){
  visited[x][y] = 1;
  for(int i = 0; i < 4; i++){
    int nx = x + dx[i];
    int ny = y + dy[i];
    if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if(a[nx][ny] == 0) continue;
    if(a[nx][ny] == 1 && !visited[nx][ny]){
      dfs(nx, ny);
    }
  }
  return;
}

int main(){
  cin >> t;
  for(int i = 0; i < t; i++){
    int ret = 0;
    cin >> n >> m >> k;
    for(int i = 0; i < n; i++){
      for(int j = 0; j < m; j++){
        a[i][j] = 0;
        visited[i][j] = 0;
      }
    }
    for(int i = 0; i < k; i++){
      cin >> npx >> npy;
      a[npx][npy] = 1;
    }
    for(int i = 0; i < n; i++){
      for(int j = 0; j < m; j++){
        if(a[i][j] == 1) continue;
        else a[i][j] = 0;
      }
    }
    for(int i = 0; i < n; i++){
      for(int j = 0; j < m; j++){
        if(a[i][j] == 1 && !visited[i][j]){
          dfs(i, j);
          ret++;
        }
      }
    }
    cout << ret << "\n";
  }
  return 0;
}