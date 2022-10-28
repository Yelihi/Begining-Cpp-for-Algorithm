#include <bits/stdc++.h>
using namespace std;
int n, under = 1;
int maximum = 0;
int a[104][104], visited[104][104];

int dx[] = { -1, 1, 0, 0};
int dy[] = { 0, 0, -1, 1};

void dfs(int x, int y){
  visited[x][y] = 1;
  for(int i = 0; i < 4; i++){
    int nx = x + dx[i];
    int ny = y + dy[i];
    if(nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if(a[nx][ny] > under && !visited[nx][ny]){
      dfs(nx, ny);
    }
  }
  return;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);  
  cin >> n;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < n; j++){
      scanf("%1d", &a[i][j]);
    }
  }
  for(int i = 1; i < 101; i++){
    int ret = 0;
    under = i;
    for(int i = 0; i < n; i++){
      for(int j = 0; j < n; j++){
        visited[i][j] = 0;
      }
    }
    for(int i = 0; i < n; i++){
      for(int j = 0; j < n; j++){
        if(a[i][j] > under && !visited[i][j]){
          dfs(i, j);
          ret++;
        }
      }
    }
    maximum = max(maximum, ret);
  }
  cout << maximum << "\n";
  return 0;
}

// 정답인데 진짜 뭐가 문제인지 이해가 안간다. 너무 잘 작성한거 같은데

#include<bits/stdc++.h>
using namespace std;   
int a[101][101], e[101][101], visited[101][101], n, temp, ret = 1;
int dy[4] = {-1, 0, 1, 0}, dx[4] = {0, 1, 0, -1};
void dfs(int y, int x, int d){
    visited[y][x] = 1; 
    for(int i = 0; i < 4; i++){
        int ny = y + dy[i]; 
        int nx = x + dx[i]; 
        if(ny < 0 || nx < 0 || ny >= n || nx >= n) continue; 
        if(!visited[ny][nx] && a[ny][nx] > d) dfs(ny, nx, d);
    }
    return;
} 
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);   
    cin >> n; 
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            cin >> a[i][j];
        }
    }
    for(int d = 1; d < 101; d++){
        fill(&visited[0][0], &visited[0][0] + 101 * 101, 0); 
        int cnt = 0;  
        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                if(a[i][j] > d && !visited[i][j]) {
                    dfs(i, j, d);
                    cnt++;
                }
            }
        }
        ret = max(ret, cnt);
    }
    cout << ret << '\n';
    return 0; 
}