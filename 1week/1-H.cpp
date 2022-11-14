// #include <bits/stdc++.h>
// using namespace std;
// int n, k;
// int a[100004];
// vector<int> v1, v2;
// int main(){
//   cin >> n >> k ;
//   for(int i = 0; i < n; i++){
//     cin >> a[i];
//     v1.push_back(a[i]);
//   }
//   for(int i = 0; i < n - (k - 1); i++){
//     v2.push_back(accumulate(v1.begin() + i, v1.begin() + (i + k), 0));
//   }
//   int max = *max_element(v2.begin(), v2.end());
//   cout << max << "\n";
//   return 0;
// }

// 시간초과 발생... 이렇게 해서는 안될것 같다.
// 최대값을 구하는 것이나, 최소값을 구하는 방식은 법칙이 있다.
// 최대값을 구하는 것은 최소값을 지정하고 이를 갱신해가면서 하는것이고, 최소값을 구하는 것은 최대값을 지정하고 이를 갱신하면서 진행한다
// 따라서 여기서도 최소값을 지정해야 한다.
// 문제에서 n 은 10만 이하다.
// k 는 10만 - 1 까지 갈수있다
// 온도는 -100 에서 100 사이다.
// 이를통해 유추할 수 있는 점은 최소값은 10만 * -100 즉, 한 -1000만 정도라고 할 수 있다.
// 이렇게 한 뒤 누적합을 이용해서 구간별 합을 구하는 방법을 쓰자.

#include <bits/stdc++.h>
using namespace std;
int n, k, a, psum[100004], ret = -10000004;
int main(){
  cin >> n >> k;
  for(int i = 1; i <= n; i++){
    cin >> a;
    psum[i] = psum[i - 1] + a; 
  }

  for(int i = k; i <= n; i++){
    ret = max(ret, psum[i] - psum[i - k]);
  }
  cout << ret << "\n";
  return 0;
}