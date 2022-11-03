#include <bits/stdc++.h>
using namespace std;
int n, m;
int cnt = 0;
string c;
int a[104][104], cloud[104][104];
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  cin >> n >> m;
  for(int i = 0; i < n; i++){
      cin >> c;
    for(int j = 0; j < m; j++){
      if(c[j] == 'c') a[i][j] = 1;
      else a[i][j] = 0;
    }
  }
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
    if(a[i][j] == 1){
      cloud[i][j] = 0;
      cnt = 1;
    }
    if(a[i][j] == 0){
      if(cnt != 0){
        cloud[i][j] = cnt;
        cnt += 1;
      }else{
        cloud[i][j] = -1;
      }
    }
  }
  cnt = 0;
  }
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      cout << cloud[i][j] << " ";
    }
    cout << "\n";
  }
  return 0;
}

//답안지

#include <bits/stdc++.h>
using namespace std;  
int n, m, a[104][104];
string s; 
int main () {
	cin >> n >> m; 
	for(int i = 0; i < n; i++){
		cin >> s; 
		for(int j = 0; j < m; j++){ 
			if(s[j] == '.')a[i][j] = -1;
			else a[i][j] = 0;
		}
	}
	for(int i = 0; i < n; i++){ 
		for(int j = 0; j < m; j++){
			if(a[i][j] == 0){ 
				int cnt = 1;
				while(a[i][j + 1] == -1){
					a[i][j + 1] = cnt++;
					j++;
				} 
			}
		} 
	} 
	for(int i = 0; i < n; i++){
		for(int j = 0; j < m; j++) cout << a[i][j] << " ";
		cout << "\n";
	} 
	return 0;
}