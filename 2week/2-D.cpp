// #include <bits/stdc++.h>
// using namespace std;
// int n, m, k, cnt, x_1, y_1, x_2, y_2;
// int a[104][104], visited[104][104];
// vector<int> v;

// int dx[] = { -1, 1, 0, 0};
// int dy[] = { 0, 0, -1, 1};

// int dfs(int x, int y){
//   visited[x][y] = 1;
//   int ret = 1;
//   for(int i = 0; i < 4; i++){
//     int nx = x + dx[i];
//     int ny = y + dy[i];
//     if(nx < 0 || ny < 0 || nx >= n || ny >=m || visited[nx][ny] == 1) continue;
//     if(a[nx][ny] == 0){
//       ret += dfs(nx, ny);
//     }
//   }
//   return ret;
// }

// int main(){
//   cin >> n >> m >> k;
//   for(int i = 0; i < k; i++){
//     cin >> x_1 >> y_1;
//     cin >> x_2 >> y_2;
//     for(int i = x_1; i < x_2; i++){
//       for(int j = y_1; j < y_2; j++){
//         a[j][i] = 1;
//       }
//     }
//     for(int i = 0; i < n; i++){
//       for(int j = 0; j < m; j++){
//         if(a[i][j] == 0 && visited[i][j] == 0){
//           v.push_back(dfs(i, j));
//         }
//       }
//     }
//   }
//   sort(v.begin(), v.end());
//   cout << v.size() << "\n";
//   for(auto it : v) cout << it << " ";
//   for(int i = 0; i < n; i++){
//     for(int j = 0; j < m; j++){
//         cout << a[i][j] << " ";
//       }
//       cout << "\n";
//   }
//   // cout << ret << "\n";
//   // for(auto it : v) cout << it << " ";
//   return 0;
// }


//

#include<bits/stdc++.h> 
using namespace std;  
#define y1 aaaa 
int a[104][104], m, n, k, x1, x2, y1, y2, visited[104][104];
const int dy[4] = {-1, 0, 1, 0};
const int dx[4] = {0, 1, 0, -1};
vector<int> ret; 
int dfs(int y, int x){
    visited[y][x] = 1; 
    int ret = 1; 
    for(int i = 0; i < 4; i++){
        int ny = y + dy[i]; 
        int nx = x + dx[i]; 
        if(ny < 0 || ny >= m || nx < 0 || nx >= n || visited[ny][nx] == 1) continue; 
		if(a[ny][nx] == 1) continue;
        ret += dfs(ny, nx);
    } 
    return ret; 
}
int main() { 
    ios_base::sync_with_stdio(false);  
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> m >> n >> k; 
    for(int i = 0; i < k; i++){
        cin >> x1 >> y1 >> x2 >> y2;  
        for(int x = x1; x < x2; x++){
            for(int y = y1; y < y2; y++){
                a[y][x] = 1; 
            }
        }
    }
    for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            if(a[i][j] != 1 & visited[i][j] == 0) { 
                ret.push_back(dfs(i, j));
            }
        }
    }
    sort(ret.begin(), ret.end());
    cout << ret.size() << "\n";
    for(int a : ret) cout << a << " "; 
    return 0; 
}
 