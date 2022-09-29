// 순열
#include <cstdio>
#include <vector>
#include <algorithm>
#include <iostream>
#include <bits/stdc++.h>
using namespace std;
void printV(vector<int> &v){
  for(int i = 0; i < v.size(); i++){
    cout << v[i] << " ";
  }
  cout << "\n";
}

int main(){
  int a[3] = {1, 2, 3};
  vector<int> v;
  for(int i = 0; i < 3; i++)v.push_back(a[i]);
  // 1, 2, 3 부터 오름차순으로 순열을 뽑습니다.
  do{
    printV(v);
  }while(next_permutation(v.begin(), v.end()));
  cout << " ------------------- " << "\n";
  v.clear();
  for(int i = 2; i >= 0; i--)v.push_back(a[i]);
  //3,2,1 부터 내림차순으로 순열을 뽑습니다.
  do{
    printV(v);
  }while(prev_permutation(v.begin(), v.end()));
  return 0;
}


// 재귀를 이용한 방법
#include <cstdio>
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;
int a[3] = {1,2,3};
vector<int> v;
void printV(vector<int> &v){
  for(int i = 0; i < v.size(); i++){
    cout << v[i] << " ";
  }
  cout << "\n";
}
void makePermutation(int n, int r, int depth){
  if(r == depth){
    printV(v);
    return;
  }
  for(int i = depth; i < n; i++){
    swap(v[i], v[depth]);
    makePermutation(n, r, depth + 1);
    swap(v[i], v[depth]);
  }
  return;
}
int main(){
  for(int i = 0; i < 3; i++)v.push_back(a[i]);
  makePermutation(3, 3, 0);
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
int n = 5, k = 3, a[5] = {1, 2, 3, 4, 5};
void print(vector<int> &b){
  for(int i : b)cout << i << " ";
  cout << '\n';
}
void combi(int start, vector<int> &b){
  if(b.size() == k){
    print(b);
  }
  for(int i = start + 1; i < n; i++ ){
    b.push_back(i);
    combi(i, b);
    b.pop_back();
  }
  return;
}

int main(){
  vector<int> b;
  combi(-1, b);
  return 0;
}

//중첩 for
#include <bits/stdc++.h>
using namespace std;
int n = 5;
int k = 3;
int a[5] = {1, 2, 3, 4, 5};
int main(){
  for(int i = 0; i < n; i++){
    for(int j = i + 1; j < n; j++){
      for(int k = j + 1; k < n; k++){
        cout << a[i] << " " << a[j] << " " << a[k] << "\n";
      }
    }
  }
  return 0;
}

//2개 뽑는거면
#include <bits/stdc++.h>
using namespace std;
int n = 5;
int k = 2;
int a[5] = {1, 2, 3, 4, 5};
int main(){
  for(int i = 0; i < n; i++){
    for(int j = i + 1; j < n; j++){
      cout << a[i] << " " << a[j] << "\n";
    }
  }
  return 0;
}