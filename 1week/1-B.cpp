#include<bits/stdc++.h>
using namespace std;
int cnt[26];
string str;
int main(){
    cin >> str;
    for(char a : str){
        cnt[a - 'a']++;
    }
    
    for(auto v : cnt){
        cout << v << " ";
    }
    return 0;
    
}