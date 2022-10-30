#include <bits/stdc++.h>
using namespace std;
int n; 
char a[101][101];
string s;

string quad(int x, int y, int size){
  if(size == 1) return string(1, a[x][y]);
  char b = a[x][y];
  string ret = "";
  bool flag = 0;
  for(int i = x; i < x + size; i++){
    for(int j = y; j < y + size; j++){
      if(b != a[i][j]){
        ret += '(';
        ret += quad(x, y, size /2);
        ret += quad(x, y + size/2, size/2);
        ret += quad(x + size/2 , y, size/2);
        ret += quad(x + size/2, y + size/2, size/2);
        ret += ")";
        return ret;
      }
    }
  }

  return string(1, a[x][y]);
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  cin >> n;
  for(int i = 0; i < n; i++){
    cin >> s;
    for(int j = 0; j < n; j++){
      a[i][j] = s[j];
    }
  }
  cout << quad(0,0,n) << "\n";
  return 0;
}
