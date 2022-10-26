#include <bits/stdc++.h>
using namespace std;
int a[1004][1004];
int dx[] = {-1,1,0,0};
int dy[] = {0,0,-1,1};
int main(){
  int y = 1;
  int x = 1;
  for(int i = 0; i < 4; i++){
    int nx = x + dx[i];
    int ny = y + dy[i];
    cout << ny << " : " << nx << "\n";
  }
  return 0;
}
