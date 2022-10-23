#include <bits/stdc++.h>
using namespace std;
int n, m;
string a, b;
int main(){
  cin >> n;
  for(int i = 0; i < n; i++){
    map<string, int> mp; // 매번 저장되는 값이 달라진다.
    cin >> m;
    for(int i = 0; i < m; i++){
      cin >> a >> b;
      mp[b]++; // 사실 이름은 의미없다
    }
    long long ret = 1; // 곱셈이니 1로하고, 경우의 수니 longlong 으로 처리한다.
    for(auto it : mp){
      ret *= ((long long)it.second + 1); // 안 입는 경우를 생각해서 경우의 수를 구해준다.
    }
    ret--; // 마지막으로 아예 안입는 경우 1가지 제외
    cout << ret << "\n"; // 출력
  }
  return 0;
}