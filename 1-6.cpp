#include <bits/stdc++.h>
using namespace std;
vector<int> v;
int main(){
  for(int i = 1; i <= 10; i++)v.push_back(i); // 동적 배열 v 에다가 넣기
  for(int a : v) cout << a << " "; // 차례대로 출력 (백터 v 를 순차적으로 돌림)
  cout << "\n";
  v.pop_back(); // 뒤에서 하나 빼기
  for(int a : v) cout << a << " ";
  cout << "\n";
  v.erase(v.begin(), v.begin() + 1); //[0, 1] 범위 지우기
  for(int a : v) cout << a << " ";
  cout << "\n";
  auto a = find(v.begin(), v.end(), 100);
  if(a == v.end()) cout << "not found" << "\n";
  fill(v.begin(), v.end(), 10); // 10으로 채워넣는다. 전체를
  for(int a : v) cout << a << " ";
  cout << "\n";
  v.clear(); // 다 지워버린다.
  cout << "아무것도 없을까?\n";
  for(int a : v) cout << a << " ";
  return 0;
}


// 뒤부터 요소를 더하는 push_back(), 맨 뒤부터 지우는 pop_back(), 지우는 erase, 요소를 찾는
// find(vector의 함수가 아니라 algorithm에서 제공하는 함수입니다.), 배열을 초기화 하는
// clear()이라는 함수가 있습니다. 

#include <bits/stdc++.h>
using namespace std;
vector<int> v(6, 100); //크기를 정했다. 100을 6개
int main(){
  for(int a : v) cout << a << " ";
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
void f(vector<int> &v){ // 백터를 매개변수로 넘기는 방법. 
  v[0] = 100;
}
int main(){
  vector<int> v;
  for(int i = 1; i  <= 3; i++)v.push_back(i);
  f(v); // 벡터를 인자로 받아서 함수를 실행. 첫번쨰 인자를 100을 바꾼다.
  for(int a : v) cout << a << " ";
  return 0;
}

// v[10] 같은걸 넘기는 방법
#include <bits/stdc++.h>
using namespace std;
void f(vector<int> v[10]){ // 아마도 10 10 칸 짜리 빈배열인듯 싶다.
  v[0][0] = 1000; // 왼쪽끝에 기입
}

int main(){
  vector<int> v[10];
  for(int i = 1; i <= 10; i++)v[0].push_back(i); // 첫번쨰 행에 10개의 열 집어넣기
  // v[0].push_back(100);
  f(v);
  for(int i : v[0]) cout << i << " ";
  return 0;
}