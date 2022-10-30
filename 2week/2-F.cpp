#include <bits/stdc++.h>
using namespace std;
int n, m, k, call, max_x, min_x;
int cnt;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  cin >> n >> m;
  cin >> k;
  min_x = 1;
  for(int i = 0; i < k; i++){
    max_x = min_x + m - 1;
    cin >> call;
    if(min_x <= call && max_x >= call) continue;
    if(call < min_x){
      cnt += min_x - call;
      min_x = call;
    }else{
      cnt += call - max_x;
      min_x += call - max_x;
    } 
  }
  cout << cnt << "\n";
  return 0;

}