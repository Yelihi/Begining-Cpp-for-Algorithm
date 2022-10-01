#include <bits/stdc++.h>
using namespace std;
vector<int> v;
int main(){
  for(int i = 1; i < 10; i++)v.push_back(i);
  for(int i = 0; i < 8; i++){
    rotate(v.begin(), v.begin() + 1, v.end());
    // 한번 할때마다 반시계 방향으로 한칸씩 움직인다. 여기서는 반복문으로 총 8번을 실행시킴
  }
  // rotate(v.begin(), v.begin() + v.size() - 1, v.end()) -> 시계 방향 회전.
  for(std::vector<int>::iterator it=v.begin(); it != v.end(); it++){
    std::cout << " " << *it;
    std::cout << "\n";
  }
  // for(auto it : v) cout << it << "\n"; 과 같다.
  return 0;
}