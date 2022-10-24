#include <bits/stdc++.h>
using namespace std;
int M, N, cnt;
int a[150004];
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL); // 시간오버나면 요거 걸어주자
  cin >> N;
  cin >> M;
  for(int i = 0; i < N; i++){
    cin >> a[i];
  }
  sort(a, a + N);
  for(int i = 0; i < N; i++){
    for(int j = i + 1; j < N; j++){
      if(a[i] + a[j] == M)cnt++;
    }
  }
  cout << cnt << "\n";
  return 0;
}

// 답안지

#include<bits/stdc++.h> 
using namespace std;     
int n, m, a[150001], cnt;
int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cin >> n >> m; 
	for(int i = 0; i < n; i++) cin >> a[i];
	sort(a, a + n); 
	if(m > 200000) cout << 0 << "\n"; // 재료 하나당 10만이 최대니 총 20만을 넘는게 나올수가 없다.
	else{
		for(int i = 0; i < n; i++){
			for(int j = i + 1; j < n; j++){
				if(a[i] + a[j] == m)cnt++;
			}
		}
		cout << cnt << "\n";
	} 
}