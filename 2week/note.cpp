// #include <bits/stdc++.h>
// using namespace std;
// int n, c, a[1004];
// vector<pair<int, int>> v;
// map<int, int> mp, mp_first;
// bool cmp(pair<int, int> a, pair<int, int> b){
//   if(a.first == b.first){
//     return mp_first[a.second] < mp_first[b.second];
//   }
//   return a.first > b.first;
// }

// int main(){
//   ios_base::sync_with_stdio(false);
//   cin.tie(NULL); cout.tie(NULL);
//   cin >> n >> c;
//   for(int i = 0; i < n; i++){
//     cin >> a[i];
//     mp[a[i]]++;
//     if(mp_first[a[i]] == 0) mp_first[a[i]] = i + 1;
//   }
//   for(auto it : mp){
//     v.push_back({it.second, it.first});
//   }
//   sort(v.begin(), v.end(), cmp);
//   for(auto a : v){
//     for(int j = 0; j < a.first; j++){
//       cout << a.second << " ";
//     }
//   }
//   return 0;
// }


#include <bits/stdc++.h>
using namespace std;
int n, m, a[10][10];

int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

typedef pair<int, int> pi;
vector<pi> v;

bool visited[10][10];

void dfs(int x, int y){
  if(visited[x][y] || a[x][y] == 1) return;
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
      if(a[i][j] == 2) dfs(i, j);
    }
  }
  int ans = 0;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      if(a[i][j] == 0 && !visited[i][j]) ans++;
    }
  }
  return ans;
}

int main(){
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      cin >> a[i][j];
      if(a[i][j] == 0 && !visited[i][j]) v.push_back(pi(i, j));
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
