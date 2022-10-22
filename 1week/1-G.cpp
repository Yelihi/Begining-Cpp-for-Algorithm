#include <bits/stdc++.h>
using namespace std;
int n;
string s, in_s, pre, suf;
int main(){
  cin >> n;
  cin >> in_s;
  int star = in_s.find('*');
  pre = in_s.substr(0, star);
  suf = in_s.substr(star + 1);
  for(int i = 0; i < n; i++){
    cin >> s;
    if(pre.size() + suf.size() > s.size()){
      cout << "NE\n";
    }else{
      if(pre == s.substr(0, pre.size()) && suf == s.substr(s.size() - suf.size())){
        cout << "DA\n";
      }else{
        cout << "NE\n";
      }
    }

  }
  return 0;
}