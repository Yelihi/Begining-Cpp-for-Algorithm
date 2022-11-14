// dfs 실행시 호출과 반대 방향으로 실행이 된다.

// 연구소 문제
// 시간복잡도를 살펴봐야 한다. 만약 모든 경우의 수를 다 따져도 괜찮을 경우라면 실제 무식하게 푸는 방법이 좋다.
#include <bits/stdc++.h>
using namespace std;
typedef pair<int, int> pi;
int n, m, virus[10][10];
bool visited[10][10];

int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

vector<pi> v;

void dfs(int x, int y){
  if(visited[x][y] == 1 || virus[x][y] == 1) return;
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
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      if(virus[i][j] == 2) dfs(i, j);
    }
  }
  int ans = 0;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      if(!visited[i][j] && virus[i][j] == 0) ans++
    }
  }
  return ans;
}


int main(){
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      cin >> virus[i][j];
      if(!visited[i][j] && virus[i][j] == 0) v.push_back(pi(i, j));
    }
  }
  int ans = 0;
  for(int i = 0; i < v.size(); i++){
    for(int j = i + 1; j<v.size(); j++){
      for(int k = j + 1; k < v.size(); k++){
        virus[v[i].first][v[i].second] = virus[v[j].first][v[j].second] = virus[v[k].first][v[k].second] = 1;
        ans = max(ans, solve());
        virus[v[i].first][v[i].second] = virus[v[j].first][v[j].second] = virus[v[k].first][v[k].second] = 0;
      }
    }
  }

  cout << ans << "\n";
  return 0;
}

// 영화 감독 숌
#include <bits/stdc++.h>
using namespace std;
int n;
int main(){
  cin >> n;
  int i = 666;
  for(;; i++){
    if(to_string(i).find("666") != string::npos)n--;
    if(n == 0) break;
  }
  cout << i << "\n";
  return 0;
}

// 컴백홈
#include <bits/stdc++.h>
using namespace std;

int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

int n, m, k, visited[10][10];
char a[10][10];
string s;

int go(int x, int y){
  if(x == 0 && y == m - 1){
    if(k == visited[x][y]) return 1;
    return 0;
  }
  int ret = 0;
  for(int i = 0; i < 4; i++){
    int nx = x + dx[i];
    int ny = y + dy[i];
    if(nx < 0 || ny < 0 || nx >= n || ny >= m || visited[nx][ny] || a[nx][ny] == 'T')continue;
    visited[nx][ny] = visited[x][y] + 1;
    ret += go(nx, ny);
    visited[nx][ny] = 0;
  }
  return ret;
}

int main(){
  cin >> n >> m >> k;
  for(int i = 0; i < n; i++){
    cin >> s;
    for(int j = 0; j < m; j++){
      a[i][j] = s[j];
    }
  }
  visited[n - 1][0] = 1;
  cout << go(n-1, 0) << "\n";
}
