// 입력
// 백준같은 사이트에서는 항상 입력을 받게 되어있다.

#include <bits/stdc++.h>
using namespace std;
int a;
int main(){
  cin >> a;
  scanf("%d", &a);
  return 0;
}

//보통은 이렇게 cin과 scanf로 받습니다. 저기 %d는 int형을 받겠다라는 뜻이며 %lf로는 실수형을
//받을 수 있습니다. %c로는 char형이 있습니다.

//문제에서 형식을 기반으로 입력이 주어지지 않은 경우 cin을 쓰는 것이 좋습니다. cin은
//개행문자(띄어쓰기, 엔터)를 구분하여 입력을 받습니다.

// 예를 들어 3.22로 소수점을 두고 입력형식이 주어진 상태로 오는 경우가 있습니다. 이를 어떻게
// 받아야 할까요? 바로 아래와 같이 받아야 겠죠? 이렇듯, scanf를 쓰는 때는 입력형식이 정해져있을
// 때 받습니다. 또한 이렇게 실수형으로 입력이 올 때 정수형으로 입력을 받고 싶다면 이렇게 하기도
// 합니다. 추후 설명하겠지만 실수형연산은 너무나도 정신건강에 해롭습니다. 되도록이면
// 정수형변환을 해서 하는 것이 좋습니다.

// scanf("%d.%d", &m1, &m2)

// 따닥따닥 붙어있는것을 입력받는 방법

#include <bits/stdc++.h>
using namespace std;
int m, n, a[10][10]; // 먼저 어떤식으로 행렬을 몇 x 몇 으로 할지 결정
string s; // 이후 총 n 번의 입력을 받을 것임
int main(){
  cin >> n >> m; // 차례대로 행 열을 입력
  for(int i = 0; i < n; i++){
    cin >> s; // 반복을 돌면서 문자를 기입받음
    for(int j = 0; j < m; j++){
      a[i][j] = s[j] - '0'; // 문자열을 형변환 시킨다.
    }
  }
  // 반복이 끝나면 데이터가 입력되어있고, 이제 출력을 한다. 
  cout << '\n'; // 한칸 뛰고
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      cout << a[i][j]; // 전체를 순환돌면서 출력한다.
    }
    cout << '\n';
  }
}

#include <bits/stdc++.h>
using namespace std;
int m, n, a[10][10];
int main(){
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      scanf("%1d", &a[i][j]); // 문자열을 한번만 기입하게 받어 행렬로 나타낸다.
    }
  }
  cout << '\n';
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      cout << a[i][j];
    }
    cout << '\n';
  }
  return 0;
}

// 문자열이라면 scanf(" %c", &a[i][j]) 로 하면된다. 띄어쓰기가 앞에 되어있는데 이는
// 만일 엔터를 치면서 문자입력시 이 역시 고려해야하기 때문이다.

//getline : 개행문자 시 입력받아 출력하기

#include <bits/stdc++.h>
using namespace std;
string s;
int main(){
  getline(cin, s);
  cout << s << '\n';
  return 0;
}

// 문제에서 입력을 계속 주다가 안주게 되었을 때 로직을 종료한다고 가정하면
// while 을 사용하여 입력을 받아주자.
// 예를 들어 1234 를 입력하고, 그다음 바로 이어서 3456 를 입력하는것임 종료되지않고

//1안
#include <bits/stdc++.h>
using namespace std;
int n;
int main(){
  while(cin >> n){
    cout << n << '\n';
  }
}

//2안
#include <bits/stdc++.h>
using namespace std;
int n;
int main(){
  while(scanf("%d", &n) != EOF){
    cout << n << '\n';
  }
}