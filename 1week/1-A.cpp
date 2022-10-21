// #include <bits/stdc++.h>
// using namespace std;
// int a[9];
// int main(){
//   ios::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
//   for(int i = 0; i < 9; i++){
//     cin >> a[i];
//   }
//   sort(a, a+9);
//   do{
//     int sum = 0;
//     for(int i = 0; i < 7; i++) sum += a[i];
//     if(sum == 100) break;
//   }while(next_permutation(a, a+9));
//   for(int i = 0; i < 7; i++) cout << a[i] << "\n";
//   return 0;
// }

// 순열로도 된다.

#include <bits/stdc++.h>
using namespace std;
int a[9], sum;
pair<int, int> b;
vector<int> v;
void comb(){
    for(int i = 0; i < 9; i++){
        for(int j = i+1; j < 9; j++){
            if(sum - a[i] - a[j] == 100){
                b = {i, j};
                return;
            }
        }
    }
}

int main(){
    for(int i = 0; i < 9; i++){
        cin >> a[i];
        sum += a[i];
    }
    comb();
    for(int i = 0; i < 9; i++){
        if(b.first == i || b.second == i) continue;
        v.push_back(a[i]);
    }
    sort(v.begin(), v.end());
    for(auto it : v) cout << it << "\n";
    return 0;
    
}