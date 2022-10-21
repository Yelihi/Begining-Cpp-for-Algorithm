#include <bits/stdc++.h>
using namespace std;
string ch;
vector<int> order, reorder;
int main(){
  cin >> ch;
  for(int i = 0; i < ch.length(); i++){
    order.push_back(ch[i]);
    reorder.push_back(ch[i]);
  }
  reverse(reorder.begin(), reorder.end());
  if(order == reorder){
    cout << 1 << "\n";
  }else{
    cout << 0 << "\n";
  }
  return 0;
}


// 이게 백터를 할 필요가 없다. 그냥해도된다.
#include <bits/stdc++.h>
using namespace std;
string a, temp;
int main(){
  cin >> a;
  temp = a;
  reverse(temp.begin(), temp.end());
  if(temp == a) cout << 1 << "\n";
  else cout << 0 << "\n";
  return 0;
}