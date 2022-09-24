#include <bits/stdc++.h>
using namespace std;
int v[10]; // array 10자리
int main(){
  for(int i = 1; i <= 10; i++)v[i - 1] = i; // v[0] = 1 ....
  for(int a : v) cout << a << " ";
  cout << "\n";
  auto a = find(v, v + 10, 100);
  if(a == v + 10) cout << "not found" << "\n";
  fill(v, v + 10, 10);
  for(int a : v) cout << a << " ";
  cout << "\n";
  return 0;
}

// // 배열의 크기를 먼저 선언해 준 후 배열의 요소를 할당해 준뒤 이런식으로 진행해야 합니다. 이 때
// // 크기는 문제에서 필요한 “최대크기”로 선언해야 합니다.

// // vector 초기화하기
vector<int> v[10]; // v벡터 10개 생성
vector<int> v(n, 0) // 0이라는 value 를 가진 n개의 벡터를 생성
// vector로 2차원 배열 매트릭스 만들기
vector<vector<int>> checked;
vector<vector<int>> v(n + 1, vector<int> (n + 1, 0));
//fill로도 초기화 할 수 있다.
fill(v.begin(), v.end(), 0);
//배열초기화 shortcut : 전체 0으로 초기화한다. 일부 컴파일러에서 통하지 않을 수도 있다.
int dp[10] = {0, };
int dp[10][10] = {{0, } };
fill(dist, dist + MAX_N, 0);
//부분초기화 : 0번쨰를 0, 1번째를 1로 초기화한다.
int a[n] = {0,1};
memset(check, 0, sizeof(check));
//fill을 사용한 2차원 배열 초기화
for(int i = 0; i < 10; i++) fill(dp[i], dp[i]+10, 0);
fill(&arr[0][0], &arr[0][0] + n*m, k) // 이런식으로 한번에 초기화 가능


#include <bits/stdc++.h>
using namespace std;
int a[5]; // 역시 미리 선언하기
int temp[5]; // 미리 선언하자.
int main(){
  for(int i = 0; i < 5; i++) a[i] = i;
  memcpy(temp, a, sizeof(a)); // 임시 temp 에다가 a를 복사해서 저장
  for(int i : temp) cout << i << " ";
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
const int mxy = 3; // 미리 사이즈르 정해주자
const int mxx = 4;
int a[mxy][mxx]; // 2차원 배열
int main(){
  for(int i = 0; i < mxy; i++){
    for(int j = 0; j < mxx; j++){
      a[i][j] = (i + j);
    }
  }
  for(int i = 0; i < mxy; i++){ // 출력은 생성 순서대로 한다.
    for(int j = 0; j < mxx; j++){
      cout << a[i][j] << " ";
    }
    cout << "\n";
  }
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
pair<int, int> pi; // 두 쌍의 수를 저장한다.
tuple<int, int, int> tl; // 세 쌍의 수를 저장한다.
int a, b, c;
int main(){
  pi = {3, 6}; // 수 기입
  tl = make_tuple(1,2,3); // 3자리 수를 기입할 때 메서드 사용.
  tie(a, b) = pi;
  cout << a << " : " << b << "\n";
  tie(a, b, c) = tl;
  cout << a << " : " << b << " : " << c << "\n";
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
pair<int, int> pi;
tuple<int, int, int> tl;
int a, b, c;
int main(){
  pi = make_pair(1, 2);
  a = pi.first;
  b = pi.second;
  cout << a << " : " << b << "\n";
  tl = make_tuple(1,2,3);
  a = get<0>(tl);
  b = get<1>(tl);
  c = get<2>(tl);
  cout << a << " : " << b << " : " << c << "\n";
  return 0;
}

// sort
#include <bits/stdc++.h>
using namespace std;
vector<int> a;
int b[5];
int main(){
  for(int i = 5; i >= 1; i--) b[i - 1] = i;
  for(int i = 5; i >= 1; i--) a.push_back(i);
  // 오름차순
  sort(b, b + 5);
  sort(a.begin(), a.end());
  for(int i : b) cout << i << " ";
  cout << "\n";
  for(int i : a) cout << i << " ";
  cout << "\n";
  sort(b, b + 5, less<int>());
  for(int i : b) cout << i << " ";
  cout << "\n";
  sort(a.begin(), a.end(), less<int>());
  for(int i : a) cout << i << " ";
  cout << "\n";
  //내림차순
  sort(b, b + 5, greater<int>());
  for(int i : b) cout << i << " ";
  cout << "\n";
  sort(a.begin(), a.end(), greater<int>());
  for(int i : a) cout << i << " ";
}

#include <bits/stdc++.h>
using namespace std;
vector<pair<int, int>> v;
int main(){
  for(int i = 10; i >= 1; i--){
    v.push_back({i, 10 - i});
  }
  sort(v.begin(), v.end());
  for(auto it : v) cout << it.first << " : " << it.second << "\n";
  return 0;
}

//  for(pair<int,int> it : v로 할 수도 있습니다. vector v에 있는
// “요소”들을 끄집어내서 순회한다는 의미죠. v[0], v[1] 따위로 접근한다는 의미입니다. auto는 형이
// 정해져있지 않은 형을 뜻합니다. pair<int, int> 보다 auto가 코드수가 더 짧기 때문에 pair나 tuple에
// 있는 값이나 struct에 있는 값을 기반으로 순회할 때 이런 걸 쓰면 조금 더 빠르게 코드를 짤 수
// 있습니다.

#include <bits/stdc++.h>
using namespace std;
vector<tuple<int, int, int>> ti;
int main(){
  for(int i = 10; i >= 1; i--){
    ti.push_back(make_tuple(i, 9 - i, 10 - i));
  }
  sort(ti.begin(), ti.end());
  for(auto it : ti){ // 임의로 작성해보았다.
    int a, b, c;
    tie(a, b, c) = it;
    cout << a << " : " << b << " : " << c << "\n";
  }
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
vector<pair<int, int>> v;
bool cmp(pair<int, int> a,  pair<int, int> b){
  return a.first > b.first;
}
int main(){
  for(int i = 10; i >= 1; i--){
    v.push_back({i, 10 - i});
  }
  sort(v.begin(), v.end(), cmp);
  for(auto it : v) cout << it.first << " : " << it.second << "\n";
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
map<string, int> mp;
int main(){
  mp.insert({"test", 1});
  mp.emplace("test5", 5);
  mp["test1"] = 4; // 추가하는 방법3 권장하는 방법
  for(auto element : mp){
    cout << element.first << " : : " << element.second << "\n";
  }
  auto search = mp.find("test1");
  if(search != mp.end()){ // 2가지 방법으로도 가능하다.
    cout << "found :" << search -> first << " " << (*search).second << "\n";
  }else{
    cout << "not found.." << "\n";
  }
  mp["test1"]++;
  cout << mp["test1"] << "\n";
  cout << mp.size() << "\n";
  mp.erase("test1");
  cout << mp.size() << "\n";
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
int main(){
  map<string, int> eden;
  eden["count"]++;
  eden["count"]++;
  for(auto count : eden){
    cout << count.first << " : " << count.second << "\n";
  };
  return 0;

// }

#include <bits/stdc++.h>
using namespace std;
map<int, int> mp;
map<string, string> mp2;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  cout << mp[1] << "\n"; // 값이 없으면 0이다.
  cout << mp2["aaa"] << "\n"; // 이렇게 하면 빈문자.
  for(auto i : mp) cout << i.first << " " << i.second;
  cout << "\n";
  for(auto i : mp2) cout << i.first << " " << i.second;
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
map<int, int> mp;
map<string, string> mp2;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  if(mp[1] == 0){
    mp[1] = 2;
  }
  for(auto i : mp) cout << i.first << " " << i.second;
  return 0;
}
// 근데 이것보다, 좀 더 나은 코드라고 생각한다면 

#include <bits/stdc++.h>
using namespace std;
map<int, int> mp;
map<string, string> mp2;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  if(mp.find(1) == mp.end()){
    mp[1] = 2;
  }
  for(auto i : mp) cout << i.first << " " << i.second;
  return 0;
}

// unordermap : 정렬이 되지 않은 배열이라고 생각하자. 해시테이블같은
#include <bits/stdc++.h>
using namespace std;
unordered_map<string, int> umap;
int main(){
  umap["a"] = 1;
  umap["b"] = 1;
  umap["c"] = 1;
  for(auto i : umap) {
    cout << i.first << " : " << i.second << "\n";
  }
  return 0;
}

// 실제 결과물을 보면 정렬이 안되있음을 알 수 있다.
// 얼핏보면 정렬이 필요로 하지 않은 문제에는 unordered_map을 써야 할 것같지만 제출해보면
// 시간초과가 나기도 합니다. 이는 가장 최악의 경우 O(N)이기 때문이죠. 그냥 되도록 map을 쓰는
// 것을 권장합니다.

//set
// 중복된 값을 포함하지 않는다. 

#include <bits/stdc++.h>
using namespace std;
int main(){
  set<pair<string, int>> st;
  st.insert({"test", 1});
  st.insert({"test", 1});
  st.insert({"test", 1}); // 다 중복이라 하나만 나온다.
  for(auto i : st) cout << i.first << " : " << i.second;
  cout << "\n";
  set<int> st2;
  st2.insert(1);
  st2.insert(1); // 중복되어서 나오질 않는다.
  st2.insert(2);
  st2.insert(3);
  for(auto i : st2) cout << i << " ";
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
int main(){
  set<pair<string, int>> _set;
  _set.insert({"hi", 1});
  _set.insert({"hi", 1});
  _set.insert({"hi", 1});
  _set.insert({"hi", 1});
  cout << _set.size() << "\n";
  return 0;
}

// multiset 
// 중복된 값도 넣어도 되고, 객체 형태로 넣을 필요가 없다.

#include <bits/stdc++.h>
using namespace std;
multiset<int> s;
int main(){
  s.insert(12);
  s.insert(10);
  s.insert(2);
  s.insert(12);
  s.insert(10);
  s.insert(90);
  s.insert(80);
  s.insert(72);
  s.insert(45);
  cout << "Multiset elements after sort\n";
  for (auto it = s.begin(); it != s.end(); it++){
    cout << *it << " ";
  }
  cout << "\n";
  auto it1 = s.find(10);
  auto it2 = s.find(90);
  s.erase(it1, it2); // 지울 범위 10부터 90전까지
  cout << "Multiset elements after erase\n";
  for(auto it = s.begin(); it != s.end(); it++){
    cout << (*it) << " ";
  }
  s.erase(s.begin()); // 2를 지워버림
  cout << "\n";
  for (auto it = s.begin(); it != s.end(); it++){
    cout << (*it) << " ";
  }
  return 0;
}
// 결과값에서 알 수 있듯이, 순서가 있다.