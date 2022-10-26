#include <bits/stdc++.h>
using namespace std;
int n, m;
int cnt = 0;
int a[104][104];

bool dfs(int x, int y){
  if(x < 0 || x >= n || y < 0 || y >= m) return false;

  if(a[x][y] == 0){
    a[x][y] = 1;
    dfs(x-1,y);
    dfs(x, y-1);
    dfs(x+1, y);
    dfs(x, y+1);
    return true;
  } 
  return false;
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
      if(dfs(i ,j)){
        cnt += 1;
      }
    }
  }
  cout << cnt << "\n";
  return 0;
}
