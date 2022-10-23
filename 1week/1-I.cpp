#include <bits/stdc++.h>
using namespace std;
int n, m;
string a;
map<int, string> v1;
map<string, int> v2;
string s;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL); // 시간오버나면 요거 걸어주자
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    cin >> a;
    v1.insert({i + 1, a}); // i 의 시작점을 유의하자
    v2.insert({a, i + 1});
  }
  for(int i = 0; i < m; i++){
    cin >> s;
    if(atoi(s.c_str()) == 0){ // 0이 나오면 문자다
      cout << v2[s] << "\n";
    }else{
      cout << v1[atoi(s.c_str())] << "\n"; // 숫자는 그냥 숫자를 뱉는다.
    }
  }
  return 0;
}


// 답안지

#include<bits/stdc++.h>
using namespace std;
int n, m;
string s; 
map<string, int> mp;
map<int, string> mp2;
string a[100004];
int main(){  
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	cin >> n >> m; 
	for(int i = 0; i < n; i++){
		cin >> s; 
		mp[s] = i + 1;  
		mp2[i + 1] = s; 
        a[i + 1] = s;
	}
	for(int i = 0; i < m; i++){
		cin >> s; 
		if(atoi(s.c_str()) == 0){
			cout << mp[s] << "\n";
		}else{
			cout << a[atoi(s.c_str())] << "\n"; 
			//cout << mp2[atoi(s.c_str())] << "\n"; 
		}
	} 
}