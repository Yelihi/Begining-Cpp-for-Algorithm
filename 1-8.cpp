//stack
//LIFO (Last In First Out) 구조

// LIFO, 가장 마지막으로 들어간 데이터가 가장 첫번째로 나오는 구조를 지녔습니다. 문자열 폭발,
// 아름다운 괄호만들기 짝을 찾기 등 문제에 쓰입니다. “교차하지 않고” 라는 문장이 나오면 스택을
// 사용할지 말지를 의심해봐야 합니다.

#include <bits/stdc++.h>
using namespace std;
stack<string> stk;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  stk.push("엄");
  stk.push("준");
  stk.push("식");
  stk.push("화");
  stk.push("이");
  stk.push("팅");
  while(stk.size()){
    cout << stk.top() << "\n"; // 스택에 쌓여있는 가장 윗부분
    stk.pop();
  }
}

//queue
// 큐(queue)는 먼저 집어넣은 데이터가 먼저 나오는 성질(FIFO, First In First Out)을 지닌 자료
// 구조이며, 나중에 집어넣은 데이터가 먼저 나오는 스택과는 반대되는 개념을 가졌습니다. 삽입 및
// 삭제에 O(1), 탐색에 O(n)이 걸립니다.

#include <bits/stdc++.h>
using namespace std;
int main(){
  queue<int> q;
  q.push(1);
  cout << q.front() << "\n";
  q.pop();
  cout << q.size() << "\n";
  return 0;
}

// 보통 queue는 아래와 같이 size()와 함께 쓰입니다. pop()을 하게 되면 size가 작아지겠죠? 그러다가
// 0이 되면 false가 되면서 while문이 종료가 되어 루프를 빠져나오게 되는 로직입니다.

#include <bits/stdc++.h>
using namespace std;
int main(){
  queue<int> q;
  for(int i = 1; i <= 10; i++) q.push(i);
  while(q.size()){
    cout << q.front() << ' ';
    q.pop();
  }
  return 0;
}

//decue
//앞 뿐 아니라 뒤에서도 꺼내쓸 수 있음.

#include <bits/stdc++.h>
using namespace std;
int main(){
  deque<int> dq;
  dq.push_front(1);
  dq.push_back(2);
  dq.push_back(3);
  cout << dq.front() << "\n";
  cout << dq.back() << "\n";
  cout << dq.size() << "\n";
  dq.pop_back();
  dq.pop_front();
  cout << dq.front() << "\n";
  return 0;
}

// 구조체 활용하기
// 특정한 구조에 대하여 정렬을 하고 싶다면 따로 정의를 해주어야 한다. 
// 그냥 숫자를 정렬하는것은 간단히 처리할 수 있겟지만, 그렇지 않을 경우 그에 맞는 구조체를 형성해야한다.

#include <bits/stdc++.h>
using namespace std;
struct Point{
  int y, x;
  Point(int y, int x) : y(y), x(x){}
  Point(){y = -1; x = -1;}
  bool operator < (const Point & a) const{
    if(x == a.x) return y < a.y;
    return x < a.x;
  }
};
vector<Point> v; // 마치 int 마냥 새로운 구조를 생성했음
int main(){
  for(int i = 10; i >= 1; i--){
    Point a = {i, i};
    v.push_back(a);
  }
  sort(v.begin(), v.end());
  for(auto it : v) cout << it.y << " : " << it.x << "\n";
  return 0;
}

// x,y,z 3개의 인자를 받아 오름 내림 오름차순
#include <bits/stdc++.h>
using namespace std;
struct Multi{
  int z, y, x;
  Multi(int z, int y, int x) : z(z), y(y), x(x){}
  Multi(){z = -1; y = -1; x = -1;}
  bool operator < (const Multi & it) const {
    if(x == it.x){
      if(y == it.y) return z < it.z; 
      return y > it.y;
      } 
      return x < it.x;
  }
};

vector<Multi> v;
int main(){
  for(int i = 10; i >= 1; i--){
    Multi a = {i, i, i};
    v.push_back(a);
  }
  sort(v.begin(), v.end());
  for(auto i : v) {
    cout << i.z << " : " << i.y << " : " << i.x << "\n";
  }
  return 0;
}

//우선순위 큐
#include <bits/stdc++.h>
using namespace std;
priority_queue<int, vector<int>, greater<int>> pq; // 오름차순
//priority_queue<int, vector<int>, less<int>> pq; // 내림차순
int main(){
  pq.push(5);
  pq.push(4);
  pq.push(6);
  pq.push(7);
  pq.push(2);
  pq.push(1);
  while(pq.size()){
    cout << pq.top() << "\n"; // 스택에 쌓여있는 가장 윗부분
    pq.pop();
  }
}

#include <bits/stdc++.h>
using namespace std;
struct Point{
  int y, x;
  Point(int y, int x) : y(y), x(x){}
  Point(){y = -1; x = -1;}
  bool operator < (const Point & a) const{
    return x > a.x;
}
};
priority_queue<Point> pq;
int main(){
  pq.push({1, 1});
  pq.push({2, 4});
  pq.push({5, 2});
  pq.push({4, 7});
  pq.push({8, 3});
  pq.push({7, 7});
  while (pq.size()){
    cout << pq.top().x << " : " << pq.top().y << "\n";
    pq.pop();
  }
  return 0;
}

// 오름차순을 원했는데 1부터 나온다. 우선순위 큐에서는 그렇다
// 따라서 < 로 해주면 된다.
// 가장 최소를 끄집어 내고 싶은 로직이라면 > , 최대라면 < 이런식으로 설정하면
// 됩니다.

