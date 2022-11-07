#include <bits/stdc++.h>
using namespace std;
int t;
string s;

bool check(string s){
  stack<char> stk;
  for(char a : s){
    if(a == '(') stk.push(a);
    else{
      if(!stk.empty()) stk.pop();
      else return false;
    }
  }
  return stk.empty();

}
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  cin >> t;
  for(int i = 0; i < t; i++){
    cin >> s;
    if(check(s)) cout << "YES\n";
    else cout << "NO\n";
    }
    return 0;
  }

