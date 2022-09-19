#include <bits/stdc++.h>
using namespace std;
int main(){
  string s = "a";
  string s2 = "42amumu";
  cout << atoi(s.c_str()) << '\n'; // 문자열이니 0
  cout << atoi(s2.c_str()) << '\n'; // 숫자가 있으니 숫자 
  return 0;
}
// 숫자가 하나라도 포함되어있다면 숫자를 반영한다. 

#include <bits/stdc++.h>
using namespace std;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  int a = -1;
  cout << bool(a) << '\n'; // 0이 아니니 true
  a = 0;
  cout << bool(a) << '\n'; // 0이니 false
  a = 1;
  cout << bool(a) << '\n'; // 0이 아니니 true
  return 0;
}

// int의 경우 4바이트로서 최대 20억까지 표현이 가능하다
// 허나 대부분 int 의 최대값으로(INF) 1e9 정도까지 표현을 한다
// const int INF = 1e9
// const 는 변경이 불가능한 변수를 선언할 떄 사용(익숙하죠)
// const 를 사용함으로서 다른 사용자에게 이 변수는 변경할 생각이 없다는것을 알려줄 수 있다.

// long long 의 경우 8바이트로서 최대 30억까지 표현이 가능하다.
// int 로서 해결이 안되는 경우 longlong 을 써야 한다.

// double 은 실수형이다. 이걸 쓰자

