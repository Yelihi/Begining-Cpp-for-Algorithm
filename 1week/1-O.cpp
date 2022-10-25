#include <bits/stdc++.h>
using namespace std;
int n;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  while(cin >> n){
    int ret = 1, multi = 1;
    while(true){
      if(multi % n == 0){
        cout << ret << "\n";
        break;
      }else{
       multi = (multi * 10) + 1;
       multi = multi % n;
       ret++; 
      }
    }
  }
  return 0;
}