#include <bits/stdc++.h>
using namespace std;
void b(int a[][5]){ // 이해는 안가지만 뒤 배열 수는 정해줘야 한다.
  a[0][4] = 44;
}
int main(){
  int a[3][5] = {
    {1, 2, 3, 4, 5},
    {6, 7, 8, 9, 10},
    {11, 12, 13, 14, 15}
  };
  b(a);
  cout << a[0][4] << "\n";
  return 0;
}

// 배열 회전시키기.
#include <bits/stdc++.h>
using namespace std;
//오른쪽 90 회전
void rotateLeft90(vector<vector<int>> &key){
  int m = key.size();
  vector<vector<int>> temp(m, vector<int>(m, 0));
    for(int i = 0; i < m; i++){
      for(int j = 0; j < m; j++){
        temp[i][j] = key[j][m - i -1];
      }
    }
  key = temp;
  return;
};

void rotateRight90(vector<vector<int>> &key){
  int m = key.size();
  vector<vector<int>> temp(m, vector<int>(m,0));
  for(int i = 0; i < m; i++){
    for(int j = 0; j < m; j++){
      temp[i][j] = key[m - j - 1][i];
    }
  }
  key = temp;
  return;
};

int main(){
  vector<vector<int>> v = {
    {1, 2, 3, 4, 5},
    {1, 2, 3, 4, 5},
    {1, 2, 3, 4, 5},
    {1, 2, 3, 4, 5},
    {1, 2, 3, 4, 5}
  };
  rotateRight90(v); // 주소값까지 같이 안줘도 되는지 의문...
  for(int i = 0; i < v.size(); i++){
    for(int j = 0; j < v[i].size(); j++){
      cout << v[i][j]<<" ";
    }
    cout << "\n";
  }
  return 0;
}