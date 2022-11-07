#include <bits/stdc++.h>
using namespace std;
typedef pair<int, int> pi;

int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

int n, m, a[10][10];
bool visited[10][10];

vector<pi> v;

void dfs(int x, int y){
  if(a[x][y] == 1 || visited[x][y]) return;
  visited[x][y] = 1;
  for(int i = 0; i < 4; i++){
    int nx = x + dx[i];
    int ny = y + dy[i];
    if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    dfs(nx, ny);
  }
}

int solve(){
  memset(visited, 0, sizeof(visited));
  for(int i = 0; i<n; i++){
    for(int j = 0; j < m; j++){
      if(a[i][j] == 2) dfs(i, j);
    }
  }
  int ans = 0;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      if(!visited[i][j] && a[i][j] == 0) ans++;
    }
  }
  return ans;
}

int main(){
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      cin >> a[i][j];
      if(!visited[i][j] && a[i][j] == 0) v.push_back(pi(i, j));
    }
  }
  int ans = 0;
  for(int i = 0; i < v.size(); i++){
    for(int j = i + 1; j < v.size(); j++){
      for(int k = j + 1; k < v.size(); k++){
        a[v[i].first][v[i].second] = a[v[j].first][v[j].second] = a[v[k].first][v[k].second] = 1;
        ans = max(ans, solve());
        a[v[i].first][v[i].second] = a[v[j].first][v[j].second] = a[v[k].first][v[k].second] = 0;
      }
    }
  }
  cout << ans;
  return 0;
}


