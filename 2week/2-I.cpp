#include <bits/stdc++.h>
using namespace std;
int n;
string s;
multimap<int, int> mp;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  cin >> n;
  for(int i = 0; i < n; i++){
    cin >> s;
    string ret;
    for(int j = 0; j < s.size(); j++){
      if(s[j] >= '0' && s[j] <= '9'){
        ret += s[j];
      }else{
        if(ret.size()){
         mp.insert({stoi(ret), 1});
         ret.clear();
        }else{
          continue;
        }       
      }
    }
    if(ret.size()){
      mp.insert({stoi(ret), 1});
    } 
  }
  for(auto it : mp){
    cout << it.first << "\n";
  }
  return 0;
}

// 코드는 잘 되는데 런타임 오류가 발생하네.. 뭐때문일까나

// 답안지
#include <bits/stdc++.h>
using namespace std;
int n;
vector<string> v;
string s, ret;
void go(){
  while(true){
    if(ret.size() && ret.front() == '0') ret.erase(ret.begin());
    else break;
  }
  if(ret.size() == 0) ret = '0';
  v.push_back(ret);
  ret = "";
}
bool cmp(string a, string b){
  if(a.size() == b.size()) return a < b;
  return a.size() < b.size();
}
int main(){
  cin >> n;
  for(int i = 0; i < n; i++){
    cin >> s;
    ret = "";
    for(int j = 0; j < s.size(); j++){
      if(s[j] < 65) ret += s[j];
      else if(ret.size()) go();
    }
    if(ret.size()) go();
  }
  sort(v.begin(), v.end(), cmp);
  for(string i : v)cout << i << '\n';
  return 0;
}