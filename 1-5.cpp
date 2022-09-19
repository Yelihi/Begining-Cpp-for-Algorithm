// 출력
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
double a = 1.23456789;
int main(){
  cout << a << '\n'; // 보통 소수 5자리까지
  cout.precision(7); // 6자리까지 하고싶다면 이렇게 사용
  cout << a << '\n';
  return 0;
}

//printf
// 형식을 지정해줄 수 있다. 소수점 몇째짜리부터, 숫자앞에 0을 붙인다던지

#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
double a = 1.23456789;
int b = 2;
int main(){
  printf("%.6lf\n", a); // 소수점 6째자리수
  printf("%02d\n", b); // 앞에 0을 붙이기
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
int a = 1;
char s = 'a';
string str = "어벤져스";
double b = 1.223123;
int main(){
  printf("아이엠어 아이언맨: %d\n" , a);
  printf("아이엠어 아이언맨: %c\n" , s);
  printf("아이엠어 아이언맨: %s\n" , str.c_str());
  printf("아이엠어 아이언맨: %lf\n" , b);
  return 0;
}

//형 변환
// 그냥 앞에 변환하고 싶은 타입을 적어준다.
#include <bits/stdc++.h>
using namespace std;
int main(){
  double ret = 2.12345;
  int n = 2;
  int a = (int)round(ret / double(n)); // 계산은 항상 같은 형식끼리!!!
  cout << a << '\n';
  return 0;
}

// 문자를 숫자로 (아스키코드를 이용한다.)
#include <bits/stdc++.h>
using namespace std;
char a = 'a';
int main(){
  cout << (int)a - 'a' << '\n';
  return 0;
}