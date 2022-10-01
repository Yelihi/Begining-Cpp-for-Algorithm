#include <bits/stdc++.h>
using namespace std;
void b(int a){
  a = 2;
}
void b2(int & a){
  a = 2;
}
void b3(int * a){
  *a = 3;
}
int main(){
  int a = 1;
  b(a);
  printf("%d\n", a); // 1 안바뀐다. 주소값을 전달해줘야 한다.
  b2(a);
  printf("%d\n", a); // 주소값을 전달하였으니 바뀐다.
  b3(&a); // 주소값을 전달해준다.
  printf("%d\n", a);
  return 0;
}