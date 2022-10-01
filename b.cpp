//g++ -std=c++14 -Wall a.cpp -o test.out
void rotate90(vector<vector<int>> &key){
int m = key.size();
vector<vector<int>> temp(m, vector<int>(m, 0));
for(int i = 0; i < m; i++){
for(int j = 0; j < m; j++){
temp[i][j] = key[j][m - i - 1];
}
}
key = temp;
return;
}

//오른쪽
void rotate90(vector<vector<int>> &key){
int m = key.size();
vector<vector<int>> temp(m, vector<int>(m, 0));
for(int i = 0; i < m; i++){
for(int j = 0; j < m; j++){
temp[i][j] = key[m - j - 1][i];
}
}
key = temp;
return;
}