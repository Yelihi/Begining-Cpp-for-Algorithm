//g++ -std=c++14 -Wall a.cpp -o test.out
#include<bits/stdc++.h>
using namespace std;
void go(int a[]){
a[2] = 100;
}
int a[3] = {1, 2, 3};
int main(){
go(a);
for(int i : a) cout << i << '\n';
}