#include <bits/stdc++.h>
using namespace std;
vector<int> v;
int main(){
  for(int i = 1; i <=6; i++) v.push_back(i);
  int i = 1;
  int temp = v[i];
  v[i] = v[i + 1];
  v[i + 1] = v[i + 2];
  v[i + 2] = v[i + 3];
  v[i + 3] = temp;
  for(int i : v) cout << i << " "; 
  return 0;

}

// 부분 회전
