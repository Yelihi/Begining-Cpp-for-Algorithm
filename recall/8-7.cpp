#include <bits/stdc++.h>
using namespace std;
vector<int> v;
int main(){
  int n = 523;
  int b = 2;
  while(n > 1){
    v.push_back(n % b);
    n /= b;
  }
  if(n == 1){
    v.push_back(1);
  }
  reverse(v.begin(), v.end());
  for(auto it : v) {
    if(it >= 10) cout << char(it + 55);
    cout << it;
  }
  return 0;
}

// 3진법으로 바꾸고 싶다면 b를 3으로 변경시켜주자.