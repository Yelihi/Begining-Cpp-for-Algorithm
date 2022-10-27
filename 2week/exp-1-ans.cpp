#include <bits/stdc++.h>
using namespace std;
int n, m, ret;
int a[104][104];
bool visited[104][104];

int dx[] = {-1,1,0,0};
int dy[] = {0,0,-1,1};

void dfs(int x, int y){
  cout << x << " : " << y << "\n";
  visited[x][y] = 1;
  for(int i = 0; i < 4; i++){
    int nx = x + dx[i];
    int ny = y + dy[i];
    if(nx < 0 || nx >=n || ny < 0 || ny >= m) continue;
    if(a[nx][ny] == 1 && !visited[nx][ny]){
      dfs(nx, ny);
    }
  }
  return;
}

int main(){
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      scanf("%1d", &a[i][j]);
    }
  }
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      if(a[i][j] == 1 && !visited[i][j]){
        ret += 1; dfs(i, j);
      }
    }
  }
  cout << ret << "\n";
  return 0;
}


// 연습
#include <bits/stdc++.h>
using namespace std;
int n, m, ret;
int a[104][104];
int visited[104][104];

int dx[] = { -1, 1, 0, 0};
int dy[] = { 0, 0, -1, 1};

void dfs(int x, int y){
  visited[x][y] = 1;
  for(int i = 0; i < 4; i++){
    int nx = x + dx[i];
    int ny = y + dy[i];
    if(nx < 0 || nx >=n || ny < 0 || ny >= m) continue;
    if(a[nx][ny] == 1 && !visited[nx][ny]){
      dfs(nx, ny);
    }
  }
  return;
}

int main(){
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      scanf("%1d", &a[i][j]);
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