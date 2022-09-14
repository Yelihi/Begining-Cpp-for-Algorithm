#include <bits/stdc++.h>
// 1. 헤더파일입니다. STL 라이브러리를 import합니다. 이 중 bits/stdc++.h는 모든
// 표준 라이브러리가 포함된 헤더입니다. 그래서 queue나 stack 등을 사용할 때 일일이
// 거기에 맞춰 #include<stack> 등 입력할 필요가 없습니다. 저것만 입력해놓고 빠르게
// 알고리즘만 신경 쓰면 됩니다.
using namespace std;
// 2. std라는 namespace를 사용한다는 뜻입니다. cin이나 cout 등을 사용할 때 원래는
// std::cin 이렇게 호출을 해야 하는데 std를 기본으로 설정한다는 뜻입니다. 이
// 네임스페이스는 같은 클래스 이름 구별, 모듈화에 쓰입니다.
string a;
// 3. 문자열을 선언했습니다. <타입> <변수명> 이렇게 선언합니다. string이라는
// 타입(형)을 가진 a라는 변수명입니다.이 때 예를 들어 string a = “큰돌”이라고
// 해봅시다. 이럴 때 a를 lvalue라고 하며 큰돌을 rvalue라고 합니다. lvalue는 추후
// 다시 사용될 수 있는 변수이며 rvalue는 한번쓰고 다시 사용되지 않은 변수를
// 말합니다.
int main(){
  cin >> a; //4. 입력입니다. 대표적으로 cin, scanf가 있습니다.
  cout << a << "\n"; //5. 출력입니다. 대표적으로 cout과 printf가 있습니다.
  return 0; // 성공적으로 마췄다는 의미
  
}