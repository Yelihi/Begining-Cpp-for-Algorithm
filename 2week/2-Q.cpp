#include <bits/stdc++.h>
using namespace std;
int n, m, a[101][101];
int hour = 0;
int cnt = 0;
int first = 0;

bool visited[101][101];

int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

vector<pair<int, int>> v;

void dfs(int x, int y){
  visited[x][y] = 1;
  if(a[x][y] == 1){
    a[x][y] = 2;
    return;
  }
  for(int i = 0; i < 4; i++){
    int nx = x + dx[i];
    int ny = y + dy[i];
    if(nx < 0 || ny < 0 || nx >= n || ny >= m || a[nx][ny] == 2 || visited[nx][ny]) continue;
    dfs(nx, ny);
  }
  return;
}

bool allZero(){
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      if(a[i][j] != 0) return false;
    }
  }
  return true;
}

void changeToZero(){
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      if(a[i][j] == 2){
        a[i][j] = 0;
      }
    }
  }
  return;
}

void calculateVolume(){
  cnt = 0;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      if(a[i][j] == 1) cnt++;
    }
  }
  hour++;
  v.push_back({hour, cnt});
  return;
}


int main(){
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      cin >> a[i][j];
      if(a[i][j] == 1) first++;
    }
  }
  while(true){
    fill(&visited[0][0], &visited[0][0] + 101 * 101, 0);
    dfs(0,0);
    changeToZero();
    calculateVolume();
    if(allZero()) break;
  }
  for(auto a : v){
    cout << a.first << " : " << a.second << "\n";
  }
  v.pop_back();
  cout << v.back().first + 1 << "\n";
  if(v.back().first + 1 == 1){
    cout << first << "\n";
  }else{
    cout << v.back().second << "\n";
  }
  return 0;

}

// 예제 다 맞는데 왜 틀리는것일까... 머리가 아프다 머리가
// 일단 답안지

#include <bits/stdc++.h>
using namespace std; 
int a[104][104], visited[104][104];
int dy[]={-1,0,1,0}, dx[] = {0,1,0,-1};   
int n,m,cnt,cnt2;
vector <pair<int,int>>v;
void go(int y,int x){
	visited[y][x] = 1;
    if(a[y][x]==1){
        v.push_back({y,x});
        return;
    }
    for(int i=0; i<4; i++){
        int ny = y + dy[i];
        int nx = x + dx[i];
        if(ny<0 || ny>=n || nx<0 || nx>=m || visited[ny][nx])continue; 
        go(ny,nx);
    }
    return;
}


int main(){ 
    cin >> n >> m;
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cin>>a[i][j];
        }
    }
    while(true){
        cnt2 =0;
        fill(&visited[0][0],&visited[0][0] + 104 * 104,0);
        v.clear(); 
        go(0,0); 
        for(pair<int, int> b : v){
			cnt2++;
			a[b.first][b.second] = 0;
		}   
        bool flag = 0;
        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                if(a[i][j] != 0) flag = 1;
            }
        }
        cnt++;
        if(!flag) break;
    }
    cout<<cnt<<"\n" << cnt2 << '\n'; 
}