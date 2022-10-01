// #include <bits/stdc++.h>
// using namespace std;
// vector<int> v;
// int main(){
//   for(int i = 1; i <= 6; i++){
//     v.push_back(i);
//   }
//   sort(v.begin(), v.end(), greater<int>());
//   for(int i : v) cout << i << " ";
//   return 0;
// }

// 형태가 pair<int, int> 라면
#include <bits/stdc++.h>
using namespace std;
vector<pair<int, int> > p;
int main(){
  for(int i = 1; i <= 6; i++){
    p.push_back({i, i});
  }
  sort(p.begin(), p.end(), greater<pair<int, int>>());
  for(auto i : p) cout << i.first << " : " << i.second << "\n";
  return 0;
}

// 커스텀 정렬
#include <bits/stdc++.h>
using namespace std;
vector<int> v;
bool cmp(int a, int b){
  return a > b;
}
int main(){
  for(int i = 1; i <= 6; i++) v.push_back(i);
  sort(v.begin(), v.end(), cmp);
  for(int i : v) cout << i << " ";
}