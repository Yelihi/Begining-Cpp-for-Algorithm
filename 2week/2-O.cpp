#include <bits/stdc++.h>
using namespace std;
string s;

bool check(string s){
  stack<char> stk;
  for(char a : s){
    if(a == '(' || a == '[') stk.push(a);
    else if(a == ')'){
      if(stk.empty() || stk.top() == '['){
        return false;
      }else{
        stk.pop();
      }
    }else if(a == ']'){
      if(stk.empty() || stk.top() == '('){
        return false;
      }else{
        stk.pop();
      }
    }
    else continue;
  }
  return stk.empty();
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  while(true){
    getline(cin, s);
    if(s == ".") break;
    if(check(s)) cout << "yes\n";
    else cout << "no\n";
  }
  return 0;
}