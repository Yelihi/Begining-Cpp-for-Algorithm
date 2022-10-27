#include<bits/stdc++.h>
using namespace std; 
const int max_n = 104; 
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1}; 
int n, m, a[max_n][max_n], visited[max_n][max_n], y, x, sy, sx, ey, ex;
int main(){ 
    scanf("%d %d", &n, &m); 
    cin >> sy >> sx; 
    cin >> ey >> ex;
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
        	cin >> a[i][j]; 
        }
    } 
    queue<pair<int, int>> q;  
    visited[sy][sx] = 1;
    q.push({sy, sx});  
    while(q.size()){
        tie(y, x) = q.front(); q.pop(); 
        for(int i = 0; i < 4; i++){
            int ny = y + dy[i]; 
            int nx = x + dx[i]; 
            if(ny < 0 || ny >= n || nx < 0 || nx >= m || a[ny][nx] == 0) continue; 
            if(visited[ny][nx]) continue; 
            visited[ny][nx] = visited[y][x] + 1; 
            q.push({ny, nx}); 
        } 
    }
    printf("%d\n", visited[ey][ex]); 
    // 최단거리 디버깅 
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
        	cout << visited[i][j] << ' '; 
        }
        cout << '\n';
    } 
    return 0;
}  

// 연습
#include <bits/stdc++.h>
using namespace std;
const int max_n = 104;

int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

int n, m, a[max_n][max_n], visited[max_n][max_n], x, y, sx, sy;

int bfs(int x, int y){
    visited[x][y] = 1;
    queue<pair<int, int>> q;
    q.push({x, y});
    while(q.size()){
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        for(int i = 0; i < 4; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];
            if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if(a[nx][ny] == 0) continue;
            if(a[nx][ny] == 1 && !visited[nx][ny]){
                visited[nx][ny] = visited[x][y] + 1;
                q.push({nx, ny});
            }

        }
    }
    return visited[n - 1][m - 1];
}