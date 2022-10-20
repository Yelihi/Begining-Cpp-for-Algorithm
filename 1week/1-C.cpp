#include <bits/stdc++.h>
using namespace std;
int x, y, z;
int a, b;
int cnt[100];
int ret;
int main(){
  cin >> x >> y >> z;
  for(int i = 1; i <= 3; i++){
    cin >> a >> b;
    for(int j = a; j < b; j++) cnt[j]++;
  }
  for(int i = 1; i <= 100; i++){
    if(cnt[i]){
      if(cnt[i] == 1) ret += x;
      else if(cnt[i] == 2) ret += 2 * y;
      else if(cnt[i] == 3) ret += 3 * z;
    }
  }

  cout << ret << "\n";
  return 0;
}