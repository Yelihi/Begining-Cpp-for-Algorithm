// #include <bits/stdc++.h>
// using namespace std;
// string a;
// map<string, int> name;
// int number;
// int count = 0;
// int main(){
//   cin >> number;
//   for(int i = 0; i < number; i++){
//     cin >> a;
//     name[a[0]]++;
//   }
//   for(auto it : name){
//     if(it.second == 5) {
//       cout << it.first;
//       count++;
//     }
//   }
//   if(count == 0) cout << "PREDAJA";
//   return 0;
// }

// 왜 안되는걸까... 논리는 같았는데...

#include <bits/stdc++.h>
using namespace std;
string name;
string ret;
int a[26], n;
int main(){
    cin >> n;
    for(int i = 0; i < n; i++){
        cin >> name;
        a[name[0] - 'a']++;
    }
    for(int i = 0; i < 26; i++){
        if(a[i] >= 5) ret += i + 'a';
    }
    if(ret.size()){
     cout << ret << "\n";   
    }else{
     cout << "PREDAJA" << "\n";
    }
    return 0;
    
}