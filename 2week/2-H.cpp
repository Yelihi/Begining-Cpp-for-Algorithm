#include <bits/stdc++.h>
using namespace std;
string word;
map<char, int> mou;
bool correct(string s){
  int isExist = 0;
  int isContinue_a = 0;
  int isContinue_else = 0;
  for(int i = 0; i < s.length(); i++){
    if(mou.find(s[i]) != mou.end()){
      mou[s[i]]++;
      isExist++;
    }
    if(s[i] == 'a' || s[i] == 'e' || s[i] == 'o' || s[i] == 'u' || s[i] == 'i'){
      isContinue_else = 0;
      isContinue_a++;
      if(isContinue_a == 3) return false;
    }else{
      isContinue_a = 0;
      isContinue_else++;
      if(isContinue_else == 3) return false;
    }
    if(i >=1 && s[i] == s[i-1]){
      if(s[i] != 'e' && s[i] != 'o'){
        return false;
      }
    }
  }

  if(isExist == 0) return false;

  return true;



}


int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  mou.insert({'a', 0});
  mou.insert({'e', 0});
  mou.insert({'i', 0});
  mou.insert({'o', 0});
  mou.insert({'u', 0});
  while(true){
    cin >> word;
    if(word == "end") break;
    if(correct(word)){
      cout << "<" << word << ">" << " is acceptable.\n";
    }else{
      cout << "<" << word << ">" << " is not acceptable.\n";
    }
  }
  return 0;
}

// 맞았고 답안지

#include <bits/stdc++.h>
using namespace std;  
string s; 
int lcnt, vcnt; 
bool isVowel(int idx){
	return (idx == 'a' || idx == 'e' || idx == 'i' || idx == 'o' || idx == 'u');
}
int main () { 
	while(true){
		cin >> s; 
		if(s == "end")break; 
		lcnt = vcnt = 0;
		bool flag = 0;
		bool is_include_v = 0;
		int prev = -1;
		for(int i = 0; i < s.size(); i++){
			int idx = s[i]; 
			if(isVowel(idx))lcnt++, vcnt = 0, is_include_v = 1;
			else vcnt++, lcnt = 0;
			if(vcnt == 3 || lcnt == 3) flag = 1; 
			if(i >= 1 && (prev == idx) && (idx != 'e' && idx != 'o')){
				flag  = 1;
			} 
			prev = idx;
		}  
		if(is_include_v == 0) flag = 1;
		if(flag) cout << "<" << s << ">" << " is not acceptable.\n";
		else cout << "<" << s << ">" << " is acceptable.\n";
	} 
	return 0;
}