#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

vector<string> split(string input, string delimiter){
  vector<string> ret;
  ll pos = 0;
  string token = "";
  while ((pos = input.find(delimiter)) != string::npos) {
    token = input.substr(0, pos);
    ret.push_back(token);
    input.erase(0, pos + delimiter.length());
  }
  ret.push_back(input);
  return ret;
}

vector<string> split_debug(string input, string delimiter){
  vector<string> ret;
  ll pos = 0;
  string token = "";
  while((pos = input.find(delimiter)) != string::npos){
    ll pos = input.find(delimiter);
    cout << "POS : " << pos << "\n";
    if(pos == string::npos) break;
    token = input.substr(0, pos);
    ret.push_back(token);
    input.erase(0, pos + delimiter.length());
  }
  ret.push_back(input);
  return ret;
}

int main(){
  string s = "안녕하세요 원익은 이번에 취준을 열심히 준비중입니다.";
  string d = " ";
  vector<string> a = split(s, d);
  string s2 = "aaaaa bbb ccccc ee ddddddd";
  vector<string> c = split_debug(s2, d);
  for(string b : a) cout << b << "\n";
  return 0;
}

// split 부분에서 기억해야 할 부분은
// while((pos = input.find(delimiter)) != string::npos){
//   token = input.substr(0, pos);
//   ret.push_back(token);
//   input.erase(0, pos + delimiter.length())
//   }
// 1. 분해할 기준이 되는 delimiter를 기분으로 input에서 그걸 찾습니다.
// 2. 그걸 기반으로 input을 앞에서부터 지워가며 다시 찾습니다.
// 3. 그러한 과정을 거쳐 결과값을 담는 배열인 ret에다 넣어가며 split이 완성된 배열을
// 완성시킵니다.