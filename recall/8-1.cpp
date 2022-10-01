#include <bits/stdc++.h>
using namespace std;
int main(){
  vector<int> v;
  int a[5] = {1, 2, 2, 2, 3};
  for(int i = 0; i < 5; i++){
    v.push_back(a[i]);
  }
  int x = 2;
  int c = (int)(upper_bound(v.begin(), v.end(), x) - lower_bound(v.begin(), v.end(), x));
  int f = (int)(lower_bound(v.begin(), v.end(), x) - v.begin());
  int t = (int)(upper_bound(v.begin(), v.end(), x) - v.begin());
  int f2 = *lower_bound(v.begin(), v.end(), x);
  int t2 = *upper_bound(v.begin(), v.end(), x);
  printf("%d의 갯수 : %d, 시작되는 점 : %d, 끝나는 점 : %d\n", x, c, f, t);
  printf("lower bound가 시작되는 점의 값: %d, upper bound가 시작되는 점의 값 : %d\n", f2, t2);
  c = (int)(upper_bound(a, a + 5, x) - lower_bound(a, a + 5, x));
  f = (int)(lower_bound(a, a + 5, x) - a);
  t = (int)(upper_bound(a, a + 5, x) - a);
  f2 = *lower_bound(a, a + 5, x);
  t2 = *upper_bound(a, a + 5, x);
  printf("%d의 갯수 : %d, 시작되는 점 : %d, 끝나는 점 : %d\n", x, c, f, t);
  printf("lower bound가 시작되는 점의 값: %d, upper bound가 시작되는 점의 값 : %d\n", f2, t2);

  return 0;
}

// 연습

#include <bits/stdc++.h>
using namespace std;
int main(){
  vector<int> v;
  int y[8] = {1,2,3,3,3,3,4,5};
  for(int i = 0; i < 8; i++){
    v.push_back(y[i]);
  }
  int x = 3;
  int a = (int)(upper_bound(v.begin(), v.end(), x) - lower_bound(v.begin(), v.end(), x));
  int b = (int)(lower_bound(v.begin(), v.end(), x) - v.begin());
  int c = (int)(upper_bound(v.begin(), v.end(), x) - v.begin() - 1);
  int aa = *lower_bound(v.begin(), v.end(), x);
  int bb = *upper_bound(v.begin(), v.end(), x);
  printf("%d의 갯수 : %d, 시작 주소 : %d, 끝 주소: %d\n", x, a, b, c);
  printf("lower bound 시작 값 : %d, upper_bound 시작 값: %d", aa, bb);
  return 0;
}

// lower_bound : 특정 값 이상의 첫번째 값의 주소값을 반환한다.
