#include <bits/stdc++.h>
using namespace std;
int n;
typedef long long ll;
ll s;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  cin >> n;
  for(int i = 0; i < n; i++){
    cin >> s;
    int ret_2 = 0;
    int ret_5 = 0;
    for(int j = 2; j <= s; j *= 2){
      ret_2 += s / j;
    }
    for(int l = 5; l <= s; l *= 5){
      ret_5 += s / l;
    }
    cout << min(ret_2, ret_5) << "\n";
  } 
  return 0;


}