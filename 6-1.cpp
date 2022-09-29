// 최대공약수
#include <bits/stdc++.h>
using namespace std;
int gcd(int a, int b){
  if(a == 0) return b;
  return gcd(b % a, a);
}
int main(){
  int a = 12;
  int b = 3;
  cout << gcd(a, b) << "\n";
  return 0;
}

// 최소공배수란 lcm은 (a * b / (a와 b의 최대공약수))이며 다음과 같이 구합니다.
#include <bits/stdc++.h>
using namespace std;
int gcd(int a, int b){
  if(a == 0) return b;
  return gcd(b % a, a);
}
int lcm(int a, int b){
  return (a * b) / gcd(a, b);
}

int main(){
  int a = 10;
  int b = 12;
  cout << lcm(a, b) << "\n";
  return 0;
}

//에리토스테네스의 체 (소수숫자를 판단하기)
#include <bits/stdc++.h>
using namespace std;
bool check(int n) {
  if(n <= 1) return 0;
  if(n == 2) return 1;
  if(n % 2 == 0) return 0;
  for(int i = 2; i * i <= n; i++){
    if(n % i == 0) return 0;
  }
  return 1;
}
int main(){
  for(int i = 1; i <= 20; i++){
    if(check(i)){
      cout << i << "는 소수입니다. \n";
    }
  }
  return 0;
}

// 승수
#include <bits/stdc++.h>
using namespace std;
int main(){
  int n = 4;
  int pow_2 = (int)pow(2, n);
  cout << pow_2 << "\n";
  return 0;
}

// pow 함수는 다음 코드 처럼 double형 인자를 2개를 받고 기본적으로 double을 반환해줍니다.
// 따라서 int형으로 사용하고 싶다면 (int)로 형변환을 꼭 해주어야 합니다.
// pow(double base, double exponent);

//제곱근 구하기
#include <bits/stdc++.h>
using namespace std;
int main(){
  int n = 4;
  int ret = (int)sqrt(n);
  cout << ret << "\n";
  return 0;
}

// 이는 기본적으로 double형을 매개변수로 받고 double형을 리턴하기 때문에 int로 쓸 거면 int
// 형변환을 꼭 해주어야 합니다.
// sqrt(double num);