#include <bits/stdc++.h>
using namespace std;
string s, ret, middle, reRet, pendle;
int limit = 0;
int cnt[30];
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL); // 시간오버나면 요거 걸어주자
  cin >> s;
  for(int i = 0; i < s.length(); i++){
    cnt[s[i] - 'A']++;
  }
  for(int i = 0; i < sizeof(cnt)/sizeof(int); i++){
    int multi = (int)(cnt[i] / 2);
    if(cnt[i] % 2 == 0){
      for(int j = 0; j < multi; j++){
        ret += (i + 'A');
        reRet += (i + 'A');
      }
    }else{
      limit++;
      for(int j = 0; j < multi; j++){
        ret += (i + 'A');
        reRet += (i + 'A');
      }
      middle = (i + 'A');
    }
  }
  reverse(reRet.begin(), reRet.end());
  pendle = ret + middle + reRet;
  if(limit < 2){
    cout << pendle << "\n";
  }else{
    cout << "I'm Sorry Hansoo" << "\n";
  }
  return 0;
}

// 교안 답안지

#include<bits/stdc++.h> 
using namespace std; 
string s, ret; 
int cnt[200], flag; 
char mid;
int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cin >> s;
	for(char a : s)cnt[a]++;
	for(int i = 'Z'; i >= 'A'; i--){
		if(cnt[i]){
			if(cnt[i] & 1){
				mid = char(i);flag++;
				cnt[i]--;
			}
			if(flag == 2)break;
			for(int j = 0; j < cnt[i]; j += 2){
				ret = char(i) + ret; 
				ret += char(i);
			}
		}
	}
	if(mid)ret.insert(ret.begin() + ret.size() / 2, mid);
	if(flag == 2)cout << "I'm Sorry Hansoo\n";
	else cout << ret << "\n"; 
}