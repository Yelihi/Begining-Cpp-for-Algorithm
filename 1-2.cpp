#include <bits/stdc++.h>
using namespace std;
int ret = 1;
void a(){ // 아무것도 return 하지 않는다.
  ret = 2;
  cout << ret << "\n";
  return;
}
int main(){
  a();
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
double a(){ // double 형태를 return 한다.
  return 1.2333;
}
int main(){
  double ret = a();
  cout << ret << "\n";
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
int main(){
  char a = 'a'; // char 형태를 retrun 한다. 1바이트의 크기를 가진다.
  cout << a << "\n";
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
int main(){
  string a = "안녕하세요"; // string 형식
  cout << a << "\n";
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
int main(){
  string a = "wow";
  a += " "; // 기존 문자열 뒤에다 더해주기
  a += "fantastic"; // 역시나 뒤에다가 더해준다.
  cout << a.size() << "\n"; // 문자열의 사이즈를 알려주는 메서드
  cout << a << "\n";
  return 0; 
}

#include <bits/stdc++.h>
using namespace std;
typedef long long ll; // long long 을 쓰기보다 ll 을 쓰기위해 타입을 다시 정의해준다.
int main(){
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  string s = "123";
  s[0]++; // 1을 더해줘서 223 이 나왔다고 보여지는 그대로 판단할건 아니다.
  // 실제로 '1'의 아스키코드인 49에서 1이 더해진 50이 '2' 이기 때문이다.
  // 문자가 변수에 저장될때는 문자가 저장되기보단 아스키코드값으로 저장이 된다.
  cout << s << "\n";
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  char a = 'a';
  cout << (int)a << "\n"; // (int)를 붙임으로서 아스키코드를 보여준다.
  return 0;
}

#include <bits/stdc++.h>
using namespace std;
string dopa = "amumu is best";
int main(){
  cout << dopa << "\n";
  if(dopa.find("amumu") != string::npos){ 
  //어떠한 문자열이 들어있나 찾습니다. 만약 찾지 못한다면 문자열의 끝 위치인
  //string::npos를 반환합니다. 문자열의 길이가 n이라고 했을 때 O(n)의 시간복잡도를
  //가집니다.
    cout << "dopa속에 아무무있다!\n";
  }
  cout << dopa.substr(0,3) << "\n"; // (시작지점, 갯수)
  reverse(dopa.begin(), dopa.end()); // 말그대로 문자열의 위치를 뒤바꿔버립니다.
  cout << dopa << "\n";
  return 0;
}