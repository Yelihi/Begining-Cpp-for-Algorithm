#include <bits/stdc++.h>
using namespace std;
string password;
int main(){
  getline(cin, password);
  for(int i = 0; i < password.size(); i++){
    if(password[i] >= 65 && password[i] < 97){
      if(password[i] + 13 > 90){
        password[i] = password[i] - 13;
      }else{
        password[i] = password[i] + 13;
      }
    }
    if(password[i] >= 97 && password[i] <= 122){
      if(password[i] + 13 > 122){
        password[i] = password[i] - 13;
      }else{
        password[i] = password[i] + 13;
      }
    }
  }
  cout << password << "\n";
  return 0;
}