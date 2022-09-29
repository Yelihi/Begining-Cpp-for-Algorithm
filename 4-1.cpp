// #include <bits/stdc++.h>
// using namespace std;
// int main(){
//   string a = "abcde";
//   string * b = &a;
//   cout << b << "\n";
//   cout << *b << "\n";
//   return 0;
// }

// C++에서 포인터와 연관되어 사용되는 연산자는 다음과 같습니다.
// 주소연산자 &와 참조 연산자 * 가 있습니다. 주소 연산자는 변수의 이름 앞에 사용하여, 해당
// 변수의 주소값을 반환합니다.'&'기호는 앰퍼샌드(ampersand)라고 읽습니다.
// 참조 연산자는 포인터의 이름이나 주소 앞에 사용하여, 포인터에 저장된 주소에 저장되어 있는 값을
// 반환합니다.
// '*'기호는 역참조 연산자로 에스크리터(asterisk operator)라고도 불립니다.C++에서 *라는 별표
// 기호는 사용하는 위치에 의해 다양한 용도로 사용됩니다. 이항 연산자로 사용하면 곱셈 연산으로,
// 포인터의 선언 시에도, 메모리에 접근할 때도 사용됩니다.

// 이터레이터는 컨테이너(배열 등)의 메모리 주소를 가리키는 데 사용되며 주소값을 바로 반환하지
// 않는 포인터의 일종입니다. 이 이터레이터의 함수 중 많이 쓰는 함수로는 begin()과 end() 두개가
// 있습니다.
// 1. begin() : 이 함수는 컨테이너 의 시작 위치를 반환하는 데 사용됩니다.
// 2. end() : 이 함수는 컨테이너의 끝 + 1의 위치를 반환하는 데 사용됩니다

// #include <bits/stdc++.h>
// using namespace std;
// vector<int> v;
// int main(){
//   for(int i = 1; i <= 5; i++)v.push_back(i);
//   for(int i = 0; i < 5; i++){
//     cout << i << "번째 요소 : " << *(v.begin() + i) << "\n";
//     cout << &*(v.begin() + i) << "\n";
//   }
//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;
// int idx = 2;
// // call by reference
// void go(int &idx){
//   idx = 1;
// }
// // call by value
// void go2(int idx){
//   idx = 4;
// }
// int main(){
//   go(idx);
//   cout << idx << "\n";
//   go2(idx);
//   cout << idx << "\n"; // 주소값으로 전달하지 않으면 변화하지 않는다.
// }

// 주소라는 것은 “메모리의 위치"이며 변수에 기록된 값은 그 메모리에 기록된 하나의 값입니다. 그렇기
// 때문에 만약 어떠한 것을 함수를 기반으로 변화시키고 싶다면 값이 아닌 주소를 넘겨 해당 메모리
// 위치로 들어가 변화시켜야 합니다.

// 배열의 이름은 주소값을 나타내기에 따로 &를 안써줘도 된다.

#include <bits/stdc++.h>
using namespace std;
void go(int a[]){
  a[2] = 100;
}
int a[3] = {1, 2, 3};
int main(){
  go(a);
  for(int i : a) cout << i << "\n";
}